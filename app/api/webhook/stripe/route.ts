// app/api/webhook/route.js
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { connectToDB } from "@/lib/mongodb";
import User from "../../../../lib/models/user.model";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || "";

export async function POST(req) {
  await connectToDB();

  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  let event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error(`Webhook signature verification failed: ${err.message}`);
    return NextResponse.json(
      { error: "Webhook signature verification failed" },
      { status: 400 }
    );
  }

  const data = event.data.object;

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = await stripe.checkout.sessions.retrieve(data.id, {
          expand: ["line_items"],
        });
        const customerId = session.customer;
        const customer = await stripe.customers.retrieve(customerId);

        let user = await User.findOne({ email: customer.email });
        if (!user) {
          user = await User.create({
            email: customer.email,
            name: customer.name,
            customerId,
          });
        }

        const priceId = session.line_items.data[0].price.id;
        user.priceId = priceId;
        user.hasAccess = true;
        await user.save();

        break;
      }

      case "customer.subscription.deleted": {
        const subscription = data;
        const user = await User.findOne({ customerId: subscription.customer });
        if (user) {
          user.hasAccess = false;
          await user.save();
        }

        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }
  } catch (error) {
    console.error(`Error processing webhook: ${error.message}`);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }

  return NextResponse.json({ received: true }, { status: 200 });
}

import Link from "next/link";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import BoltIcon from "@mui/icons-material/Bolt";

export const plans = [
  {
    name: "Monthly",
    price: 10,
    actualPrice: 19,
    duration: "/month",
    link: "https://buy.stripe.com/test_6oE01zfu21Iq1TW5kk",
    priceId: "price_1Qdre5SJd1DRp5ofwrAhXuDi",
    features: [
      "NextJS boilerplate",
      "SEO & Blog",
      "Mailgun emails",
      "Stripe / Lemon Squeezy",
      "MongoDB / Supabase",
    ],
    unavailable: [
      "Discord community & Leaderboard",
      "$1,210 worth of discounts",
      "Lifetime updates",
    ],
  },
  {
    name: "Annually",
    price: 80,
    actualPrice: 129,
    duration: "/year",
    link: "https://buy.stripe.com/test_28ocOl81A5YG6accMN",
    priceId: "price_1QdrwOSJd1DRp5ofGxaIMX5D",
    features: [
      "NextJS boilerplate",
      "SEO & Blog",
      "Mailgun emails",
      "Stripe / Lemon Squeezy",
      "MongoDB / Supabase",
      "Discord community & Leaderboard",
      "$1,210 worth of discounts",
      "Lifetime updates",
    ],
  },
];

const Pricing = ({ session }) => {
  return (
    <div className="min-h-screen text-primary-fontcol flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-bold mb-8">Pricing Plans</h1>

      {/* Pricing Cards */}
      <div className="flex justify-center items-center gap-10 font-medium">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-primary-exdark rounded-lg min-w-[330px] w-[380px] shadow-lg p-8 border border-gray-700 hover:shadow-xl transition duration-300"
          >
            <h2 className="text-2xl font-semibold mb-4">{plan.name}</h2>

            {/* Price */}
            <div className="flex items-end mb-4">
              <span className="mr-2 text-gray-500 line-through">
                ${plan.actualPrice}
              </span>
              <span className="text-4xl font-bold">${plan.price}</span>
              <span className="ml-2 text-gray-500">usd {plan.duration}</span>
            </div>

            {/* Features */}
            <ul className="space-y-2 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <CheckCircleOutlineIcon className="w-5 h-5 text-green-500 mr-2" />
                  {feature}
                </li>
              ))}

              {plan.unavailable &&
                plan.unavailable.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-500">
                    <HighlightOffIcon className="w-5 h-5 text-red-500 mr-2" />
                    {item}
                  </li>
                ))}
            </ul>

            {/* Payment Button */}
            <Link
              href={
                session
                  ? `${plan.link}?prefilled_email=${session?.user?.email || ""}`
                  : "/api/auth/signin"
              }
              target={session ? "_blank" : "_self"}
              className="w-full inline-block text-center py-2 bg-yellow-400 text-black font-medium rounded-md hover:bg-yellow-500 transition"
            >
              {session ? (
                <>
                  <BoltIcon className="text-primary-exdark" />{" "}
                  <span>Get Access</span>
                </>
              ) : (
                "Sign in to Purchase"
              )}
            </Link>
          </div>
        ))}
      </div>

      <p className="mt-6 text-gray-400 text-sm">
        Pay once. Build unlimited projects!
      </p>
    </div>
  );
};

export default Pricing;

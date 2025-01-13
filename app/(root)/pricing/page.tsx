import { auth } from "@/auth";
import Pricing from "@/components/Pricing";
import { findUserAccess } from "@/lib/actions";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();
  if (session?.user?.email) {
    const hasAccess = await findUserAccess(session.user.email);

    if (hasAccess) {
      // Redirect the user to the study page if they have access
      redirect("/study");
    }
  }
  return (
    <div className="w-full">
      <div className="max-w-2xl mx-auto">
        <Pricing session={session} />
      </div>
    </div>
  );
};

export default page;

import { auth, signIn } from "@/auth";
import SimpleAccordion from "@/components/Accordion";
import RotatingHeadlines from "@/components/RotatingHeadlines";
import { findUserAccess } from "@/lib/actions";
import { redirect } from "next/navigation";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

export default async function Home() {
  const session = await auth();

  // Check if the user is logged in and hasAccess then redirect to /study
  if (session?.user?.email) {
    const hasAccess = await findUserAccess(session.user.email);
    if (hasAccess) {
      redirect("/study");
    }
  }
  return (
    <div className="w-full h-full p-3">
      <div className="flex justify-center items-center text-center flex-col w-full max-w-[1100px] mx-auto">
        <RotatingHeadlines />
        <h1 className="head-text mt-5 font-lilita">Study Less, Learn More</h1>
        <h2 className="head-text mt-5 font-medium font-lilita">
          Instant Summaries, Flashcards, and Reports <br /> All in One Place.
        </h2>
        <span className="font-medium mt-5 text-2xl">
          Upload study materials and get instant summaries, interactive
          flashcards, citation-ready reports, and AI-powered chat with documents
          for quick doubt solving—perfect for last-minute prep!
        </span>
        <form
          action={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <button
            type="submit"
            className="mt-10 px-5 py-2 border border-primary-golden rounded-md text-primary-golden font-medium text-2xl bg-primary-golden bg-opacity-10 hover:bg-opacity-0 mb-10 flex items-center justify-center gap-2"
          >
            <TrendingFlatIcon
              className=" text-primary-golden pt-1 arrow-animate"
              sx={{ fontSize: "40px" }}
            />
            <span>Start Learning Smarter</span>
          </button>
        </form>
        <div className="w-full flex items-start">
          <div className="left left-0 w-[50%] text-start">
            <h3 className="font-lilita text-[40px] font-medium">
              Frequently Asked Questions
            </h3>
            <p className="font-medium">
              Have another question? Contact me on Twitter or by email.
            </p>
          </div>
          <div className="right right-0 w-[50%]">
            <SimpleAccordion />
          </div>
        </div>
      </div>
    </div>
  );
}

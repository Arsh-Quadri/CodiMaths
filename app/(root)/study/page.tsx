import { auth } from "@/auth";
import NotesClient from "@/components/NotesClient";
import { findUserAccess, getAllNotes } from "@/lib/actions";
import { Note } from "@/type";
import { redirect } from "next/navigation";

const Study = async () => {
  const session = await auth();
  // get started => login => if(!has_acess) pricing else study => price subsribe (has_acess) redirect study page

  if (!session) {
    redirect("/api/auth/signin"); // Redirect to sign-in if not authenticated
  }
  if (session?.user?.email) {
    const hasAccess = await findUserAccess(session.user.email);

    if (!hasAccess) {
      // Redirect the user to the study page if they have access
      redirect("/pricing");
    }
  }
  const initialNotes: Note[] = (await getAllNotes()) || [];
  return (
    <div className="w-full">
      <div className="max-w-2xl mx-auto">
        Study {session?.user?.name}
        <NotesClient initialNotes={initialNotes} />
      </div>
    </div>
  );
};

export default Study;

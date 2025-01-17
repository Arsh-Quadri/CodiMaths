import { auth, signIn } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/assets/logo.png";
import logo2 from "../public/assets/logo2.png";
import ProfileDropdown from "./ProfileDetails";
import { findUserAccess } from "@/lib/actions";

const Navbar = async () => {
  const session = await auth();
  const subscribed = await findUserAccess(session?.user?.email);
  const isStudyPage = session && subscribed;
  return (
    <header className="px-3 py-1 shadow-sm w-full text-lg font-medium bg-primary-exdark mb-5">
      <nav
        className={`flex justify-between items-center w-full ${
          isStudyPage ? "px-5" : "py-2 max-w-[1100px]"
        } mx-auto`}
      >
        <Link href="/">
          <Image
            src={isStudyPage ? logo2 : logo}
            alt="logo"
            width={isStudyPage ? 210 : 180}
            className={isStudyPage ? `` : "-translate-y-1"}
          />
        </Link>
        <div className="flex items-center gap-5 md:gap-8">
          {!isStudyPage && <Link href="/pricing">Pricing</Link>}
          {session?.user ? (
            <>
              <ProfileDropdown user={session.user} />
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("google");
              }}
            >
              <button type="submit" className="btn">
                Get Started
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/assets/logo.png";

const Navbar = async () => {
  const session = await auth();
  return (
    <header className="p-3 shadow-sm w-full text-lg font-medium bg-primary-exdark mb-5">
      <nav className="flex justify-between items-center w-full max-w-[1100px] mx-auto">
        <Link href="/">
          <Image src={logo} alt="logo" width={180} className="-translate-y-1" />
        </Link>
        <div className="flex items-center gap-5 md:gap-8">
          <Link href="/pricing">Pricing</Link>
          {session?.user ? (
            <>
              <span>{session?.user?.name}</span>
              <form
                action={async () => {
                  "use server";
                  await signOut();
                }}
              >
                <button type="submit">Logout</button>
              </form>
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

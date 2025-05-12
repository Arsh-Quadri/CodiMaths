"use client";
// import { auth, signIn } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/assets/logoCodimat.png";
// import logo from "../public/assets/logo.png";
// import logo2 from "../public/assets/logo2.png";
// import ProfileDropdown from "./ProfileDetails";
// import { findUserAccess } from "@/lib/actions";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { redirect } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const session = await auth();
  // const subscribed = await findUserAccess(session?.user?.email);
  // const isStudyPage = session && subscribed;
  return (
    <header className="px-3 sm:px-10 py-1 shadow-sm w-full text-lg font-medium bg-primary-exdark fixed z-30 bg-opacity-85">
      <nav className={`flex justify-between items-center w-full mx-auto`}>
        <Link
          href="/"
          className="flex items-start justify-center gap-1 translate-y-0.5"
        >
          <Image
            src={logo}
            alt="logo"
            width={50}
            className="block min-w-[40px]"
          />
          <div className="line w-[1px] h-[35px] bg-primary-fontcol translate-y-2 mr-1 hidden sm:block"></div>
          <div className="flex-col justify-center items-start hidden sm:flex">
            <h1>CodiMaths</h1>
            <span className="text-xs">Gain Wisdom</span>
          </div>
        </Link>
        <div className="hidden sm:flex items-center gap-5 md:gap-8 text-base md:text-lg">
          <div
            className="hover:text-primary-blue transition-colors duration-300 cursor-pointer"
            onClick={() => redirect("/")}
          >
            Home
          </div>
          <div className="hover:text-primary-blue transition-colors duration-300 cursor-pointer">
            Announcements
          </div>
          <div
            className="hover:text-primary-blue transition-colors duration-300 cursor-pointer"
            onClick={() => redirect("/events")}
          >
            Events
          </div>
          <div className="hover:text-primary-blue transition-colors duration-300 cursor-pointer">
            About
          </div>
          <div
            className="hover:text-primary-blue transition-colors duration-300 cursor-pointer"
            onClick={() => redirect("/contact")}
          >
            Contact
          </div>
        </div>
        <div className="block sm:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <CloseIcon className="text-4xl" fontSize="35px" />
          ) : (
            <MenuIcon className="text-4xl" fontSize="35px" />
          )}
        </div>
      </nav>
      {isOpen && (
        <div className="sider absolute top-0 left-0 w-full bg-primary-exdark/95 px-10 pt-20 h-screen flex flex-col items-center justify-star gap-5 -z-10 text-xl font-medium">
          <div className="">Home</div>
          <div className="">Announcements</div>
          <div className="" onClick={() => redirect("/events")}>
            Events
          </div>
          <div className="">About</div>
          <div className="">Contact</div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

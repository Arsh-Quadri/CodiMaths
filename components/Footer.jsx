import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-fit p-5 flex flex-col justify-center items-center font-medium gap-3">
      <div className="flex justify-center items-center gap-6 sm:gap-10">
        <a
          href="https://www.linkedin.com/company/codimaths/about/"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-primary-blue transition-colors duration-300"
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/codimaths_gainwisdom/"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-primary-blue transition-colors duration-300"
        >
          Instagram
        </a>
        <a
          href="https://www.codimaths.com/contact"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-primary-blue transition-colors duration-300"
        >
          Contact
        </a>
        <a
          href="https://www.codimaths.com/policies"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-primary-blue transition-colors duration-300"
        >
          Policies
        </a>
      </div>
      <p className="">© 2025 CodiMaths. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;

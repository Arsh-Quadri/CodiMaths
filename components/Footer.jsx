"use client";
import Link from "next/link";
import React, { useState } from "react";
import chatbot from "../public/assets/chatbot.gif";
import Image from "next/image";
import Chatbot from "./Chatbot";

const Footer = () => {
  const [chatbotOpen, setChatbotOpen] = useState(false);
  return (
    <div className="w-full h-fit p-5 flex flex-col justify-center items-center font-medium gap-3">
      {chatbotOpen && <Chatbot setChatbotOpen={setChatbotOpen} />}
      <div className="fixed bottom-5 md:bottom-10 right-5 md:right-10 object-cover cursor-pointer z-20 ">
        <Image
          src={chatbot}
          alt="chatbot"
          className="w-[60px] h-[60px] rounded-full object-cover shadow-md"
          onClick={() => setChatbotOpen(!chatbotOpen)}
        />
      </div>
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

import Image from "next/image";
import React from "react";

const EventSection = ({ title, image, link, desc }) => {
  return (
    <div className="h-screen w-full relative overflow-hidden">
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover brightness-[0.3] blur-sm absolute -z-10"
        priority
      />

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-6 md:px-16 animate-fadeInUp gap-5">
        {/* Left Part */}
        <div className="text-white flex flex-col justify-center h-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-medium mb-3">{title}</h2>
          <p className="font-medium text-gray-300 mb-3">{desc}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden border border-white text-white px-4 py-2 rounded-sm w-fit mx-auto md:mx-0"
          >
            <span className="relative z-10 group-hover:text-black transition-colors duration-300">
              Learn More
            </span>
            <span className="absolute bottom-0 left-0 w-full h-0 bg-white transition-all duration-300 group-hover:h-full z-0"></span>
          </a>
        </div>

        {/* Right Part */}
        <div className="hidden md:block w-[70vw]  h-[60vh] relative">
          <Image
            src={image}
            alt={`${title} right`}
            fill
            className="object-cover rounded-sm shadow-[0_0_25px_5px_rgba(255,255,255,0.5)]"
          />
        </div>
      </div>
    </div>
  );
};

export default EventSection;

"use client";

import React, { useEffect, useRef } from "react";
import isso from "../public/assets/isso.png";
import Image from "next/image";
import { redirect } from "next/navigation";

const HeroSection3 = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // This runs only on the client
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.3; // set slow motion
    }
  }, []);

  const lines = [
    "📈 Compete with top talent globally",
    "🏅 Earn awards, scholarships, and certificates",
    "🌍 Connect with renowned mentors and educators",
    "🚀 Step up to real-world challenges in STEM",
  ];

  return (
    <div className="w-full h-fit py-[100px] flex justify-center items-center relative overflow-hidden px-6 bg-black">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full scale-x-150 sm:scale-x-100 object-fill sm:object-cover z-10 brightness-50"
      >
        <source src="assets/herobg2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="backdrop-blur-lg bg-black/25 border border-white/30 p-4 rounded-2xl flex flex-col items-center text-white shadow-lg transition-all duration-300 transform max-w-[80vw] w-[90vw] sm:w-[80vw] lg:w-[60vw] min-w-[300px] h-fit z-20">
        <Image src={isso} alt="isso" className="w-[500px]" />
        <h2 className="font-lilita text-3xl md:text-4xl text-center text-primary-blue">
          Unlock Your Potential in the CodiMaths Olympiad !
        </h2>
        <h3 className="font-medium text-xl md:text-2xl py-4 text-center">
          MAIDEN INTERNATIONAL SPACE SCIENCE OLYMPIAD
        </h3>
        <p className="font-medium text-center text-base sm:text-lg">
          Challenge yourself, sharpen your skills, and stand out as a math and
          science champion! Our Olympiad welcomes students from all over the
          world to participate in a range of exciting problems and puzzles
          designed to bring out the best in your mathematical and analytical
          abilities.
        </p>
        <div className="pt-5 w-[90%] mx-auto">
          {lines.map((line, index) => (
            <React.Fragment key={index}>
              <p className="transition-all duration-700 ease-in-out text-base sm::text-lg py-2 font-medium">
                {line}
              </p>
              <div className="line w-full h-[1px] bg-gray-400"></div>
            </React.Fragment>
          ))}
        </div>
        <div
          className="px-5 py-2 bg-primary-blue text-white font-medium rounded-md cursor-pointer hover:shadow-[0_0_10px_2px_rgba(65,101,178,0.6) hover:bg-opacity-80 mt-8 mb-5"
          onClick={() => redirect("/olympiad")}
        >
          Register Now
        </div>
      </div>
    </div>
  );
};

export default HeroSection3;

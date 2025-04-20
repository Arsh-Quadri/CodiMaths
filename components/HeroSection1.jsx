import React from "react";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

const HeroSection1 = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full scale-x-150 sm:scale-x-100 object-fill sm:object-cover -z-10 brightness-50 "
      >
        <source src="assets/herobgvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center max-w-[900px] animate-fadeInUp pt-16 px-5 sm:px-0">
        <h1 className="head-text mt-5 font-medium font-lilita">
          EDUCATE, TRAIN AND{" "}
          <span className="inline-block relative px-1 py-1">
            <span className="absolute inset-0 bg-black bg-opacity-75 -rotate-[4deg] -z-10 rounded-sm"></span>
            <span className="text-primary-blue relative z-10">EMPOWER</span>
          </span>
        </h1>

        <p className="font-medium mt-5 text-lg sm:text-xl lg:text-2xl">
          We strive to build a future where knowledge and skills are accessible
          to everyone. Join us in the journey to unlock potential and transform
          the world through innovation and excellence.
        </p>

        <button
          type="submit"
          className="mt-11 px-5 py-2 border border-primary-fontcol rounded-md text-white font-medium text-lg sm:text-xl md:text-2xl cursor-pointer bg-black bg-opacity-50 hover:bg-opacity-25 mb-10 flex items-center justify-center gap-2"
        >
          <TrendingFlatIcon
            className=" text-primary-blue pt-1 arrow-animate"
            sx={{ fontSize: "40px" }}
          />
          <span>Inspiring Future Innovators</span>
        </button>
      </div>
    </div>
  );
};

export default HeroSection1;

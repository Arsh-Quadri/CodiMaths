import React from "react";
import bghome1 from "../public/assets/bghome1.jpg";
import Image from "next/image";
import card1 from "../public/assets/isro.jpeg";
import card2 from "../public/assets/nasa.jpeg";
import card3 from "../public/assets/inspace.jpeg";
import card4 from "../public/assets/google.jpeg";
import card5 from "../public/assets/sansa.jpg";
import card6 from "../public/assets/ZINGSA.jpeg";
import card7 from "../public/assets/dubai.jpeg";
import card8 from "../public/assets/ksa.jpeg";

const HeroSection4 = () => {
  const cardData = [
    {
      img: card1,
      head: "SPACE TUTOR-ISRO",
    },
    {
      img: card2,
      head: "NASA STEM GATEWAY",
    },
    {
      img: card3,
      head: "IN-SPACe",
    },
    {
      img: card4,
      head: "Google Education",
    },
    {
      img: card5,
      head: "SANSA",
    },
    {
      img: card6,
      head: "ZINGSA",
    },
    {
      img: card7,
      head: "MS Education, DUBAI",
    },
    {
      img: card8,
      head: "KSA",
    },
  ];
  return (
    <div className="w-full h-fit py-[100px] flex flex-col justify-center items-center relative overflow-hidden px-6">
      <Image
        src={bghome1}
        alt="bghome1"
        fill
        className="object-cover -z-10"
        priority
      />
      <div className="text-4xl md:text-5xl text-center font-lilita text-primary-blue py-10">
        Global Collaborators
      </div>
      <div className="flex justify-center items-center gap-4 w-full flex-wrap max-w-[1000px]">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="backdrop-blur-sm bg-black/10 border border-white/50 p-4 rounded-2xl flex flex-col items-center text-white shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_10px_5px_rgba(65,101,178,0.6)] min-w-[200px] w-[300px] h-[320px]"
          >
            <Image
              src={card.img}
              alt={`card${index + 1}`}
              className="bg-white mb-3 object-contain w-full h-[80%]"
            />
            <h2 className=" mb-1 text-xl">{card.head}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection4;

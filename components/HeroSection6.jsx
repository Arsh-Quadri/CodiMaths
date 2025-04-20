import Image from "next/image";
import React from "react";
import bghome1 from "../public/assets/bghome1.jpg";
import card1 from "../public/assets/draw1.png";
import card2 from "../public/assets/draw2.png";
import card3 from "../public/assets/draw3.png";
import card4 from "../public/assets/draw4.png";
import card5 from "../public/assets/draw5.jpeg";
import card6 from "../public/assets/draw6.jpeg";
import card7 from "../public/assets/draw7.jpeg";
import card8 from "../public/assets/draw8.jpeg";

const HeroSection6 = () => {
  const cardData = [
    {
      img: card1,
    },
    {
      img: card2,
    },
    {
      img: card3,
    },
    {
      img: card4,
    },
    {
      img: card5,
    },
    {
      img: card6,
    },
    {
      img: card7,
    },
    {
      img: card8,
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
        To Infinity and Beyond: Kids' Art of Space
      </div>
      <div className="columns-1 sm:columns-2 md:columns-3 max-w-[1000px] gap-4 p-4">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="mb-4 break-inside-avoid rounded-xl overflow-hidden shadow-lg border border-white/80"
          >
            <Image
              src={card.img}
              alt={`card${index}`}
              width={500}
              height={500}
              className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
        ))}
      </div>
      <div className="px-5 py-2 rounded-lg bg-transparent text-white border border-white/80 font-medium my-9 hover:bg-white/10 cursor-pointer">
        Send Us Your ART
      </div>
    </div>
  );
};

export default HeroSection6;

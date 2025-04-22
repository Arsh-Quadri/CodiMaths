import React from "react";
import card1 from "../public/assets/certi1.jpg";
import card2 from "../public/assets/certi2.jpeg";
import card3 from "../public/assets/certi3.jpeg";
import card4 from "../public/assets/certi4.jpeg";
import Image from "next/image";
import SimpleAccordion from "../components/Accordion";

const HeroSection8 = () => {
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
  ];
  return (
    <div className="w-full h-fit py-10 flex flex-col justify-center items-center relative overflow-hidden px-6 bg-primary-dark">
      <div className="max-w-[1000px] mx-auto text-center mb-10">
        <div className="text-4xl md:text-5xl text-center font-lilita text-primary-blue py-10">
          Accreditation & Certifications
        </div>
        <p className="text-xl font-medium">
          Our organization is recognized by various reputable global societies
          and certification authorities. We uphold the highest standards of
          excellence in space exploration and education.
        </p>
        <div className="flex justify-center items-center gap-5 w-full flex-wrap my-8">
          {cardData.map((card, index) => (
            <Image
              key={index}
              src={card.img}
              alt={`card${index + 1}`}
              className="bg-white mb-3 object-contain w-[200px] rounded-lg h-[150px]"
            />
          ))}
        </div>
      </div>
      <div className="w-full flex my-16 flex-col lg:flex-row items-start max-w-[1100px] mx-auto gap-10 lg:gap-0">
        <div className="left lg:left-0 w-[95%] sm:w-[70%] lg:w-[50%] text-center md:text-start mx-auto">
          <h3 className="font-lilita text-4xl md:text-5xl font-medium text-primary-blue">
            Frequently Asked Questions
          </h3>
          <p className="font-medium">
            Have another question? Contact me on Twitter or by email.
          </p>
        </div>
        <div className="right lg:right-0 w-[95%] sm:w-[70%] lg:w-[50%] mx-auto">
          <SimpleAccordion />
        </div>
      </div>
    </div>
  );
};

export default HeroSection8;

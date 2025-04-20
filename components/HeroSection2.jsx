import Image from "next/image";
import React from "react";
import bghome1 from "../public/assets/bghome1.jpg";
import card1 from "../public/assets/vision-icon.png";
import card2 from "../public/assets/mission-icon.png";
import card3 from "../public/assets/book-icon.png";
import card4 from "../public/assets/student-icon.png";

const cardData = [
  {
    img: card1,
    head: "Our Vision",
    text: "At CodiMaths, we aim to revive the treasure of ancient mathematics to create a bridge between traditional wisdom and modern education.",
  },
  {
    img: card2,
    head: "Our Mission",
    text: "Our mission is to address the challenges in mathematics and science learning, exacerbated by a mechanical education system and historical distortions.",
  },
  {
    img: card3,
    head: "Ancient Mathematics",
    text: "We believe that the unique techniques of Vedic Mathematics, introduced by Swami Bharathi Krishna Tirtha in the early 20th century, can rejuvenate students' mental abilities.",
  },
  {
    img: card4,
    head: "Empowering Students",
    text: "By applying 16 profound sutras rooted in Indian philosophy, we unlock the potential of the decimal system and empower students to approach mathematics with confidence and creativity.",
  },
];

const HeroSection2 = () => {
  return (
    <div className="w-full h-fit py-[100px] flex justify-center items-center relative overflow-hidden px-6">
      <Image
        src={bghome1}
        alt="bghome1"
        fill
        className="object-cover -z-10"
        priority
      />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="backdrop-blur-sm bg-black/10 border border-white/30 p-4 rounded-2xl flex flex-col items-center text-white shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_0_25px_5px_rgba(65,101,178,0.6)] w-[35vw] min-w-[300px] text-center"
          >
            <Image
              src={card.img}
              alt={`card${index + 1}`}
              width={80}
              height={50}
              className="rounded-xl mb-3 object-cover"
            />
            <h2 className="font-lilita mb-1 text-4xl text-primary-blue">
              {card.head}
            </h2>
            <p className="text-lg font-medium">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection2;

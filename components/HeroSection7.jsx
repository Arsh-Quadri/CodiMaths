import React from "react";
import bgtest from "../public/assets/bgtest.jpg";
import test1 from "../public/assets/test1.jpeg";
import test2 from "../public/assets/test2.jpeg";
import test3 from "../public/assets/test3.jpeg";
import test4 from "../public/assets/test4.jpeg";
import test5 from "../public/assets/test5.jpeg";
import test6 from "../public/assets/test6.jpeg";
import test7 from "../public/assets/test7.jpeg";
import test8 from "../public/assets/test8.png";
import test9 from "../public/assets/test9.jpeg";
import test10 from "../public/assets/test10.jpeg";
import Image from "next/image";

const HeroSection7 = () => {
  const cardData = [
    {
      name: "Cnel. Gustavo Caubarrére",
      designation: "(Presidente de SIRGAS)",
      image: test1,
      message:
        "I support the one quality in astronaut more powerful than any other is curiosity. They have to get some place nobody’s ever been.",
    },
    {
      name: "Mahantesh HireMath",
      designation:
        "(Former President of American Society of Mechanical Engineers Board)",
      image: test2,
      message:
        "I am all about spreading knowledge and excitement of Space Technology and Exploration. My mission is to- “Aspire to Inspire before You Expire.",
    },
    {
      name: "Anil Pillai",
      designation: "(Co-Founder & Executive Director - BASE Group)",
      image: test3,
      message:
        "Space and time are the framework within which the mind is constrained to construct its experience of reality.",
    },
    {
      name: "Nthabiseng Moloi",
      designation:
        "(Science Engagement Officer - STEM & Space Science Advocate | SANSA Space Agency)",
      image: test4,
      message: `Space science and technology is crucial for the future generation, especially in South Africa. At SANSA, we're committed to inspiring young minds and empowering communities.`,
    },
    {
      name: "Rumbidzai Goto",
      designation:
        "(Head of Innovation Space Science Patron - Irene Christian College | Zimbabwe Space Agency)",
      image: test5,
      message: `Space Science education can help future generations to combat climate change challenges and create a sustainable future.`,
    },
    {
      name: "Dan Goldin",
      designation: "(9th NASA Chief)",
      image: test6,
      message:
        "Greatest civilization in history valued maths as a tool for survival and advancement",
    },
    {
      name: "Miranda Satterthwaite",
      designation: "(Education Manager Aerospace New Zealand)",
      image: test7,
      message:
        "Space Education is essential to train students for future roles in robotics , telecommunications",
    },
    {
      name: "A R Murali Sankar",
      designation: "(Resident Expert , IN-SPACe)",
      image: test8,
      message: `Space exploration drives technological advancements that benefit life on Earth, from improved navigation and weather forecasting to new medical innovations. It fosters global collaboration and inspires a deeper understanding of the universe.`,
    },
    // New testimonial for Maya Sherman
    {
      name: "Maya Sherman",
      designation: "(Embassy of Israel in India | Innovation Attache , IFS)",
      image: test9,
      message: `Engaging in space innovation, we contribute to a future where human ingenuity transcends borders, pushing the limits of what’s possible for all of humanity.`,
    },
    {
      name: "Dr.Mariam (Currim) Shaikh",
      designation:
        " Life Time Advocate for Education (CEO at MS Education Consultants DUBAI)",
      image: test10,
      message: `I have always championed the power of education and curiosity and this initiative goes beyond a simple competition`,
    },
  ];
  return (
    <div className="w-full h-fit py-[100px] flex flex-col justify-center items-center relative overflow-hidden px-6">
      <Image
        src={bgtest}
        alt="bghome1"
        fill
        className="object-cover -z-10 brightness-50"
        priority
      />
      <div className="text-4xl md:text-5xl text-center font-lilita text-primary-blue py-10">
        Voices of Renowned Professionals
      </div>
      <div className="relative z-10 flex flex-wrap justify-center items-center gap-4 max-w-[1000px]">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="backdrop-blur-lg bg-black/20 border border-white/30 p-4 rounded-2xl flex flex-col items-center text-white shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_0_25px_5px_rgba(65,101,178,0.6)] w-[300px] h-[500px]"
          >
            <Image
              src={card.image}
              alt={`card${index + 1}`}
              //   width={120}
              //   height={120}
              className="rounded-full w-[120px] h-[120px] border-2 border-white mb-3 object-cover"
            />
            <p className="text-center mb-2 text-lg italic text-gray-300">
              "{card.message}"
            </p>
            <h2 className="mb-2 text-xl text-center font-medium uppercase">
              {card.name}
            </h2>
            <p className="text-center text-lg text-gray-300">
              {card.designation}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection7;

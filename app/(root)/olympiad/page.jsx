"use client";
import React from "react";
import bghome1 from "../../../public/assets/bghome1.jpg";
import Image from "next/image";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import { toast } from "react-toastify";
import card1 from "../../../public/assets/rocket.png";
import card2 from "../../../public/assets/brain.png";
import card3 from "../../../public/assets/trophy.png";
import card4 from "../../../public/assets/learn.png";
import Quiz from "../../../components/Quiz";

const Olympiad = () => {
  const papers = [
    {
      subject: "Sample Paper 1 (PDF)",
      file: "SET-A__Sample-paperage_group_13-15.pdf",
    },
    {
      subject: "Sample Paper 2 (PDF)",
      file: "SET-A__Sample-paperage_group_13-15_1NK2srz.pdf",
    },
    {
      subject: "Sample Paper 3 (PDF)",
      file: "SET-A__Sample-paperage_group_13-15_S95w5Dk.pdf",
    },
    {
      subject: "Sample Paper 4 (PDF)",
      file: "SET-A_Sample-paperage_group_10-12.pdf",
    },
    {
      subject: "Sample Paper 5 (PDF)",
      file: "SET-B__Sample-paperage_group_10-12.pdf",
    },
    {
      subject: "Sample Paper 6 (PDF)",
      file: "SET-B__Sample-paperage_group_13-15.pdf",
    },
    {
      subject: "Sample Paper 7 (PDF)",
      file: "SET-B__Sample-paperage_group_16.pdf",
    },
    {
      subject: "Sample Paper 8 (PDF)",
      file: "SET-C__Sample-paperage_group_10-12.pdf",
    },
    {
      subject: "Sample Paper 9 (PDF)",
      file: "SET-C__Sample-paperage_group_13-15.pdf",
    },
    {
      subject: "Sample Paper 10 (PDF)",
      file: "SET-C__Sample-paperage_group_16.pdf",
    },
    {
      subject: "Sample Paper 11 (PDF)",
      file: "SET-D__Sample-paperage_group_16.pdf",
    },
  ];
  const cardData = [
    {
      img: card1,
      head: "About the Olympiad",
      text: "India is hosting the Olympiad with the support of IN-SPACe (Indian National Space Promotion and Authorisation Centre).It is a three-tier examination.",
    },
    {
      img: card2,
      head: "Develop Critical Thinking",
      text: "Enhance your problem-solving abilities and creative thinking while tackling complex challenges in scientific space field",
    },
    {
      img: card3,
      head: "Achieve Excellence",
      text: "This is the first-of-its-kind space science Olympiad, where winners from every country will compete for gold, silver, and bronze medals.",
    },
    {
      img: card4,
      head: "Learn from Experts",
      text: "Participants will also have the unique opportunity to exchange their ideas and collaborate on a project under the guidance of senior Space Scientists.",
    },
  ];
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    phone: "",
    email: "",
    country: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "olympiadRegistrations"), formData);
      toast.success("Registered successfully!");
      setFormData({
        fullName: "",
        age: "",
        phone: "",
        email: "",
        country: "",
      });
    } catch (error) {
      toast.error("Error registering. Please try again.");
      console.error("Firebase Error:", error);
    }
  };
  return (
    <div className="w-full h-fit py-[100px] flex flex-col justify-center items-center relative overflow-hidden px-6 gap-[100px]">
      <Image
        src={bghome1}
        alt="bghome1"
        fill
        className="object-cover -z-10"
        priority
      />
      <form
        onSubmit={handleSubmit}
        className="p-6 rounded-xl backdrop-blur-md bg-black/20 border border-white/30 text-white shadow-md w-[50vw] max-sm:w-full"
      >
        <h2 className="text-4xl font-lilita font-medium mb-4 text-primary-blue text-center">
          Olympiad Registration
        </h2>

        {["fullName", "age", "phone", "email", "country"].map((field, i) => (
          <div key={field} className="mb-4">
            <p className="font-medium capitalize pb-1">
              {field.replace(/([A-Z])/g, " $1")}:
            </p>
            <input
              type={
                field === "age" || field === "phone"
                  ? "number"
                  : field === "email"
                  ? "email"
                  : "text"
              }
              name={field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={`Enter ${field}`}
              required
              className="w-full p-2 border border-white/30 rounded-lg outline-none bg-white/5"
            />
          </div>
        ))}

        <div className="flex justify-center mt-5">
          <button
            type="submit"
            className="w-fit cursor-pointer font-medium bg-primary-blue text-white py-2 px-4 rounded-lg hover:bg-opacity-80"
          >
            Register Now
          </button>
        </div>
      </form>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="backdrop-blur-sm bg-black/20 border border-white/30 p-4 rounded-2xl flex flex-col items-center text-white shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_0_25px_5px_rgba(65,101,178,0.6)] w-[32vw] min-w-[300px] text-center"
          >
            <Image
              src={card.img}
              alt={`card${index + 1}`}
              width={80}
              height={50}
              className="rounded-xl mb-3 object-cover"
            />
            <h2 className="font-lilita mb-1 text-3xl text-primary-blue">
              {card.head}
            </h2>
            <p className="text-lg font-medium">{card.text}</p>
          </div>
        ))}
      </div>
      <Quiz />
      <div className="backdrop-blur-sm text-center bg-black/20 border border-white/30 p-6 rounded-2xl flex flex-col justify-center items-center text-white w-[50vw] h-fit gap-5 max-sm:w-full">
        <h2 className="text-4xl font-medium font-lilita text-primary-blue">
          ISSO Practice Papers
        </h2>
        <p className="font-medium text-lg">
          Download the sample practice papers below to get started with your
          preparation:
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-center w-full px-4">
          {papers.map((paper) => (
            <li key={paper.subject}>
              <a
                href={`/pdfs/${paper.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline hover:text-blue-600"
              >
                {paper.subject}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Olympiad;

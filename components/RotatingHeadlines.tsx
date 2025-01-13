"use client";
import { useState, useEffect } from "react";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

const headlines = [
  "Tired of reading long docs? Let us do the heavy lifting!",
  "Turn endless pages into bite-sized brilliance.",
  "Get summaries, flashcards, and reports in no time!",
  "Your doc, simplified. Your time, saved.",
  "AI-powered tools to ace your studies effortlessly.",
  "Read less, learn more—your ultimate study hack!",
  "One upload, endless possibilities.",
  "Maximize your productivity, minimize your effort.",
  "Transform documents into insights, instantly.",
  "Ace Your Exams Without the All-Nighters!",
  "Turn Notes into A+ Results with AI-Powered Tools.",
];

const RotatingHeadlines = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("fade-in");

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass("fade-out"); // Trigger fade-out effect

      // After fade-out completes, change headline and fade-in
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % headlines.length);
        setFadeClass("fade-in"); // Trigger fade-in effect
      }, 500); // Wait for the fade-out transition (1 second)
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div
      className={`flex justify-center gap-3 items-center text-2xl font-bold text-center ${fadeClass}`}
    >
      <span>{headlines[currentIndex]}</span>
      <TrendingFlatIcon
        className=" text-primary-golden pt-1"
        sx={{ fontSize: "40px" }}
      />
    </div>
  );
};

export default RotatingHeadlines;

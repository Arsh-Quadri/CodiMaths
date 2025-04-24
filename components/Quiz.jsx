// import React from "react";

// const Quiz = () => {
//   return (
//     <div className="backdrop-blur-sm text-center bg-black/20 border border-white/30 p-6 rounded-2xl flex flex-col justify-center items-center text-white w-[50vw] h-fit gap-5">
//       <h2 className="text-4xl font-medium font-lilita text-primary-blue">
//         ISSO Mock Quiz Challenge
//       </h2>
//       <p className="font-medium text-lg">
//         Prepare to explore the universe! This quick quiz is designed to test
//         your knowledge of space science and Vedic maths. Sharpen your skills and
//         get ready for the real Olympiad experience.
//       </p>
//       <div className="w-fit cursor-pointer font-medium bg-primary-blue text-white py-2 px-6 rounded-lg hover:bg-opacity-80">
//         Start Quiz Now
//       </div>
//     </div>
//   );
// };

// export default Quiz;

import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "./Modal";

const questions = [
  {
    question: "What is the largest asteroid in the asteroid belt?",
    options: ["Ceres", "Vesta", "Pallas", "Juno"],
    answer: "Ceres",
  },
  {
    question: "What is the largest moon in the solar system?",
    options: ["Io", "Titan", "Ganymede", "Europa"],
    answer: "Ganymede",
  },
  {
    question: "Which planet is known as the 'Gas Giant'?",
    options: ["Saturn", "Jupiter", "Neptune", "Uranus"],
    answer: "Jupiter",
  },
  {
    question:
      "What is the name of NASA’s Mars Rover that landed on Mars in 2021?",
    options: ["Curiosity", "Perseverance", "Spirit", "Opportunity"],
    answer: "Perseverance",
  },
  {
    question: "Which planet has the shortest year?",
    options: ["Venus", "Mars", "Mercury", "Neptune"],
    answer: "Mercury",
  },
  {
    question: "Which planet has the most moons?",
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    answer: "Saturn",
  },
  {
    question: "What galaxy do we live in?",
    options: ["Andromeda", "Whirlpool", "Milky Way", "Triangulum"],
    answer: "Milky Way",
  },
  {
    question: "What is the hottest planet in our solar system?",
    options: ["Venus", "Mercury", "Mars", "Jupiter"],
    answer: "Venus",
  },
  {
    question: "What is the name of the first satellite sent into space?",
    options: ["Apollo 11", "Sputnik 1", "Voyager 1", "Explorer 1"],
    answer: "Sputnik 1",
  },
  {
    question: "Which planet is known for its prominent ring system?",
    options: ["Uranus", "Jupiter", "Neptune", "Saturn"],
    answer: "Saturn",
  },
];

const Quiz = () => {
  const [showModal, setShowModal] = useState(false);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (option) => {
    if (selected) return;
    setSelected(option);
    const isCorrect = option === questions[current].answer;
    if (isCorrect) setScore(score + 1);

    setTimeout(() => {
      if (current === questions.length - 1) {
        setShowResult(true);
      } else {
        setCurrent(current + 1);
        setSelected(null);
      }
    }, 2000);
  };

  const resetQuiz = () => {
    setShowModal(false);
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setShowResult(false);
  };

  return (
    <div className="backdrop-blur-sm text-center bg-black/20 border border-white/30 p-6 rounded-2xl flex flex-col justify-center items-center text-white w-[50vw] h-fit gap-5">
      <h2 className="text-4xl font-medium font-lilita text-primary-blue">
        ISSO Mock Quiz Challenge
      </h2>
      <p className="font-medium text-lg">
        Prepare to explore the universe! This quick quiz is designed to test
        your knowledge of space science and Vedic maths. Sharpen your skills and
        get ready for the real Olympiad experience.
      </p>
      <div
        className="w-fit cursor-pointer font-medium bg-primary-blue text-white py-2 px-6 rounded-lg hover:bg-opacity-80"
        onClick={() => setShowModal(true)}
      >
        Start Quiz Now
      </div>

      {showModal && (
        <Modal>
          <div className="backdrop-blur-sm text-center bg-black/50 border border-white/30 text-white rounded-xl p-6 w-[90vw] max-w-xl relative">
            <button onClick={resetQuiz} className="absolute top-3 right-3">
              <CloseIcon />
            </button>

            {showResult ? (
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-medium">Quiz Completed!</h3>
                <p className="text-xl">
                  Your Score: {score} / {questions.length}
                </p>
              </div>
            ) : (
              <>
                <div className="text-center mb-4 font-medium">
                  Question {current + 1} / {questions.length}
                </div>
                <h3 className="text-xl font-medium mb-4">
                  {questions[current].question}
                </h3>
                <div className="space-y-3">
                  {questions[current].options.map((opt) => (
                    <button
                      key={opt}
                      className={`w-full bg-black/10 py-2 px-4 rounded-lg border text-left font-medium transition-colors duration-200
                  ${
                    selected
                      ? opt === questions[current].answer
                        ? "bg-green-500 text-white"
                        : opt === selected
                        ? "bg-red-500 text-white"
                        : "bg-gray-200/10"
                      : " hover:bg-gray-200/10"
                  }`}
                      onClick={() => handleOptionClick(opt)}
                      disabled={!!selected}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Quiz;

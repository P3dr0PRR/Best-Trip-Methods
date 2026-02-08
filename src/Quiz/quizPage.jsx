import { questions } from "./Questions";
import React, { useState } from "react";
import { ResultsDescription } from "./results";
import { OptionButton } from "./optionButton";
import { getTravelResult } from "../utils/getTravelResults";

const INITIAL_SCORES = { car: 0, airplane: 0, boat: 0, train: 0 };

export function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [page, setPage] = useState("quiz");
  const [selectedOption, setSelectedOption] = useState(null);
  const [scores, setScores] = useState(INITIAL_SCORES);

  function handleAnswer(option) {
    setSelectedOption(option);
  }

  const result = getTravelResult(scores);
  const q = questions[currentQuestion];

  function handleSubmit() {
    if (!selectedOption) return;

    const optionMap = { A: "car", B: "airplane", C: "boat", D: "train" };
    const selectedTransport = optionMap[selectedOption];

    setScores((prev) => ({
      ...prev,
      [selectedTransport]: prev[selectedTransport] + 1,
    }));

    setSelectedOption(null);

    if (currentQuestion === questions.length - 1) {
      setPage("finished");
      return;
    }

    setCurrentQuestion((prev) => prev + 1);
  }

  if (page === "finished") {
    return (
      <section className="h-screen bg-zinc-900 text-white flex flex-col items-center justify-center p-4 sm:p-6 cursor-default overflow-hidden">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">
          Quiz Finished!
        </h2>
        <p className="mt-4 text-base sm:text-lg text-zinc-300 text-center">
          We recommend you use
          <span className="text-2xl sm:text-3xl font-bold text-indigo-500 mx-2 block sm:inline">
            {result}
          </span>
          on your next trip!
        </p>

        <div className="space-y-4 flex flex-col items-center justify-center mt-6 w-full max-w-md flex-1 overflow-y-auto">
          <ResultsDescription {...scores} />
        </div>

        <button
          aria-label="Restart"
          onClick={() => {
            setCurrentQuestion(0);
            setScores(INITIAL_SCORES);
            setPage("quiz");
          }}
          className="mt-6 px-6 sm:px-8 py-2 sm:py-3 bg-indigo-600 rounded-md hover:bg-indigo-500 transition font-medium w-full sm:w-auto text-sm"
        >
          Start Over
        </button>
      </section>
    );
  }

  return (
    <section className="h-screen bg-zinc-800 flex flex-col cursor-default text-white overflow-hidden px-4">
      <header className="bg-zinc-700 text-left mt-3 p-4 rounded-md w-full shrink-0">
        <h1 className="text-2xl sm:text-3xl font-bold text-stone-200">
          Quiz Page
        </h1>
        <p className="mt-2 text-stone-200 underline text-xs sm:text-sm">
          Question {currentQuestion + 1} of {questions.length}
        </p>
      </header>

      <section className="flex flex-col items-center justify-center flex-1 py-4 overflow-y-auto w-full">
        <div className="flex flex-col items-center w-full max-w-2xl">
          <h2 className="text-base sm:text-lg font-semibold text-center px-4">
            {q.question}
          </h2>

          <article className="w-full px-4 mt-4 sm:mt-6">
            <ul className="space-y-2 text-stone-300">
              <OptionButton
                option="A"
                text={q.A}
                isSelected={selectedOption === "A"}
                onClick={handleAnswer}
              />
              <OptionButton
                option="B"
                text={q.B}
                isSelected={selectedOption === "B"}
                onClick={handleAnswer}
              />
              <OptionButton
                option="C"
                text={q.C}
                isSelected={selectedOption === "C"}
                onClick={handleAnswer}
              />
              <OptionButton
                option="D"
                text={q.D}
                isSelected={selectedOption === "D"}
                onClick={handleAnswer}
              />
            </ul>
          </article>
        </div>
      </section>

      <div className="w-full h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shrink-0"></div>

      <button
        onClick={handleSubmit}
        className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-6 py-2 rounded-md font-medium w-full transition-transform duration-300 hover:scale-105 my-3 text-sm shrink-0"
      >
        Submit
      </button>
    </section>
  );
}

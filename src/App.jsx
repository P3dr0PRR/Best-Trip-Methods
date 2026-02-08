import React, { useState } from "react";
import { Startpage } from "./StartPage/startPage";
import { QuizPage } from "./Quiz/quizPage";

const Best_trip_methods = () => {
  const [count, setCount] = useState(0);
  const starquiz = () => {
    setCount(1);
  };

  if (count === 0) {
    return <Startpage Starquiz={starquiz} />;
  }
  if (count === 1) {
    return <QuizPage />;
  }
  return null;
};

export default Best_trip_methods;

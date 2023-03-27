import React, { useEffect, useState } from "react";
import { ContentWrapper, QuizContent } from "../../components";
import { fetchQuizQuestion } from "../../bll/quizReducer";
import { useDispatch, useSelector } from "react-redux";

export const Quiz = () => {
  let [questionNumber, setQuestionNumber] = useState(0);
  let dispatch = useDispatch();
  const increaseCount = () => {
    setQuestionNumber(++questionNumber);
  };

  const decreaseCount = () => {
    setQuestionNumber(--questionNumber);
  };

  useEffect(() => {
    dispatch(fetchQuizQuestion());
  }, []);

  let questions = useSelector((state) => state.quiz.quiz);
  console.log(questions);

  return (
    <ContentWrapper>
      {questions && (
        <QuizContent
          questions={questions}
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
          increaseCount={increaseCount}
          decreaseCount={decreaseCount}
        />
      )}
    </ContentWrapper>
  );
};

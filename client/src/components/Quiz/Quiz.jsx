import React, { useEffect, useState } from "react";
import { ContentWrapper, QuizContent } from "../../components";
import {fetchQuizQuestion} from "../../bll/quizReducer";
import {useDispatch, useSelector} from "react-redux";

export const Quiz = () => {
  let [questionNumber, setQuestionNumber] = useState(1);
let dispatch = useDispatch()
  const increaseCount = () => {
    setQuestionNumber(++questionNumber);
  };

  const decreaseCount = () => {
    setQuestionNumber(--questionNumber);
  };

  useEffect(() => {
   dispatch(fetchQuizQuestion())
  }, [dispatch]);

  let questions = useSelector(state => state)
  let initialData = useSelector(state => state.initialData)
  console.log(questions);
  // ХУЙ
  console.log(initialData);

  return (
    <ContentWrapper>
      <QuizContent
        questions={[]}
        questionNumber={questionNumber}
        setQuestionNumber={setQuestionNumber}
        increaseCount={increaseCount}
        decreaseCount={decreaseCount}
      />
    </ContentWrapper>
  );
};

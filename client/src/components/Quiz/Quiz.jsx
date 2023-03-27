import React, {useEffect, useState} from "react";
import {ContentWrapper, QuizContent} from "../../components";
import {fetchQuizQuestion} from "../../bll/quizReducer";
import {useDispatch, useSelector} from "react-redux";

export const Quiz = () => {
    let [questionNumber, setQuestionNumber] = useState(0);
    let dispatch = useDispatch()
    const increaseCount = () => {
        setQuestionNumber(++questionNumber);
    };

    const decreaseCount = () => {
        setQuestionNumber(--questionNumber);
    };
    let questions = useSelector(state => state.quiz.quiz)

    useEffect(() => {
        dispatch(fetchQuizQuestion())
    }, []);


    /*
      let initialData = useSelector(state => state.initialData)
    */
    // ХУЙ


    return (
        <ContentWrapper>
            {questions && <QuizContent
                questions={questions}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
                increaseCount={increaseCount}
                decreaseCount={decreaseCount}
            />}
        </ContentWrapper>
    );
};

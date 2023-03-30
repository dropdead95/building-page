import React, {useEffect, useState} from "react";
import {ContentWrapper, QuizContent} from "../../components";
import {fetchQuizQuestion} from "../../bll/quizReducer";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

export const Quiz = ({numberQuiz}) => {
    let [questionNumber, setQuestionNumber] = useState(0);
    let dispatch = useDispatch();
    const increaseCount = () => {
        setQuestionNumber(++questionNumber);
    };
    let idURL = useParams()
    const decreaseCount = () => {
        setQuestionNumber(--questionNumber);
    };
    let params
    if (numberQuiz) {
        params = numberQuiz
    } else {
        params = idURL.id
    }
    console.log(params)

    useEffect(() => {
        dispatch(fetchQuizQuestion())
    }, []);

    let data = useSelector((state) => state.quiz.quiz);

    return (
        <ContentWrapper>
            {data && (
                <QuizContent
                    questions={data[params - 1].attributes.quest}
                    objNumber={params - 1}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    increaseCount={increaseCount}
                    decreaseCount={decreaseCount}
                />
            )}
        </ContentWrapper>
    );
};

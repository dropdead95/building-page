import React, {useEffect, useState} from "react";
import {ContentWrapper, QuizContent} from "../../components";
import {fetchQuizQuestion} from "../../bll/quizReducer";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

export const Quiz = () => {
    let [questionNumber, setQuestionNumber] = useState(0);
    let dispatch = useDispatch();
    const increaseCount = () => {
        setQuestionNumber(++questionNumber);
    };
 let params = useParams()
    console.log(params.id)
    const decreaseCount = () => {
        setQuestionNumber(--questionNumber);
    };

    useEffect(() => {
        dispatch(fetchQuizQuestion())
    }, []);

    let data = useSelector((state) => state.quiz.quiz);
    console.log(data)

    return (
        <ContentWrapper>
            {data && (
                <QuizContent
                    questions={data[params.id-1].attributes.quest}
                    objNumber={params.id-1}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    increaseCount={increaseCount}
                    decreaseCount={decreaseCount}
                />
            )}
        </ContentWrapper>
    );
};

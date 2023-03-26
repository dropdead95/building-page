import {quizApi} from "./api/quizApi";
import {setInitialDataAC} from "./initialReducer";


const initialState = [

]


export const quizReducer = (state = initialState, action)  => {
    switch (action.type) {
        case "QUIZ/SET-QUESTIONS":
            console.log(action.data)
            return [...state, action.data]

        default:
            return state
    }
}

export const getQuizQuestionsTC = () => {
    return (dispatch) => {
      quizApi.getQuizeQuestions()
            .then((res) => {
                dispatch(setQuizQuestionsAC(res.data.data))
                dispatch(setInitialDataAC(true))
            })
            .catch((res) => {
                console.log(res)
            })

    }
}

export const setQuizQuestionsAC = (data) =>
    ({type: 'QUIZ/SET-QUESTIONS', data})
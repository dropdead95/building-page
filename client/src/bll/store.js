import { configureStore } from '@reduxjs/toolkit'
import quizReducer from "./quizReducer";
import answersSlice from "./AnswerReducer";




export const store = configureStore({reducer: {
        quiz: quizReducer,
        answers: answersSlice,
/*        initialData: initialReducer,*/
    }}, )



window.store = store; // for dev
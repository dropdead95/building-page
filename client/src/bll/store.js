import { configureStore } from '@reduxjs/toolkit'
import quizReducer from "./quizReducer";




export const store = configureStore({reducer: {
        quiz: quizReducer,
/*        initialData: initialReducer,*/
    }} )


// @ts-ignore
window.store = store; // for dev
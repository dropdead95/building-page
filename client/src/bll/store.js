import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk from 'redux-thunk'
import {quizReducer} from "./quizReducer";
import {initialReducer} from "./initialReducer";


const reducers = combineReducers({
    quiz: quizReducer,
    initialData: initialReducer,

})

export const store = legacy_createStore(reducers, applyMiddleware(thunk))


// @ts-ignore
window.store = store; // for dev
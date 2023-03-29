import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./quizReducer";
import answersSlice from "./AnswerReducer";
import meetingSlice from "./meetingReducer";

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
    answers: answersSlice,
    meetingData: meetingSlice,
  },
});

// window.store = store; // for dev

import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./quizReducer";
import answersSlice from "./AnswerReducer";
import meetingSlice from "./meetingReducer";
import photoSlice from "./photoReducer";

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
    answers: answersSlice,
    meetingData: meetingSlice,
    photo: photoSlice
  },
});

// window.store = store; // for dev

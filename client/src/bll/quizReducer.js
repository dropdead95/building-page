import { quizApi } from "./api/quizApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState = {};

export const fetchQuizQuestion = createAsyncThunk(
  "quiz/fetchQuizQuestion",
  async () => {
    return quizApi.getQuizeQuestions((data) => data.data);
  }
);
const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    changeData: (state, action) => {
      state.quiz[action.payload.objNumber].attributes.quest[
        action.payload.questionNumber
      ].options = state.quiz[action.payload.objNumber].attributes.quest[
        action.payload.questionNumber
      ].options.map((t) =>
        t.id === action.payload.id
          ? {
              ...t,
              radioBTN: true,
            }
          : { ...t, radioBTN: false }
      );
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchQuizQuestion.fulfilled, (state, action) => {
      state.quiz = action.payload.data.data;
    });
  },
});

export const { changeData } = quizSlice.actions;

export default quizSlice.reducer;

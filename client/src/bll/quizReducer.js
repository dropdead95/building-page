import {quizApi} from "./api/quizApi";
import {setInitialDataAC} from "./initialReducer";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

let initialState = {

}

export const fetchQuizQuestion = createAsyncThunk('quiz/fetchQuizQuestion', async () => {
    return quizApi.getQuizeQuestions((data) => data.data.data);
});
const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(fetchQuizQuestion.fulfilled, (state, action) => {
            state.quiz = action.payload.data.data

        })


    },
});


export const {setQuizQuestionsAC} = quizSlice.actions;

export default quizSlice.reducer;


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

import {quizApi} from "./api/quizApi";
import {setInitialDataAC} from "./initialReducer";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


const initialState = []
export const fetchQuizQuestion = createAsyncThunk('calls/fetchCalls', () => {
    return quizApi.getQuizeQuestions().then((data) => data.data.data);
});
const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        setQuizQuestionsAC(state, action) {
            state = [...state, action.data]
        },

        extraReducers: (builder) => {
            builder.addCase(fetchQuizQuestion.fulfilled, (state, action) => {
                state = action.payload;
            });
        },
    }});

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

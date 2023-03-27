import {createSlice, current} from "@reduxjs/toolkit";

let initialState = {
    answer: [

    ]
}


const answersSlice = createSlice({
    name: 'answers',
    initialState,
    reducers: {
        setAnswer: (state, action) => {
            // eslint-disable-next-line no-debugger

            const data = {
                title: action.payload.title,
                answ: action.payload.answer
            }

            state.answer.push(data)
            console.log(current(state.answer))
        }


    },
    extraReducers: () => {

    }
});


export const {setAnswer} = answersSlice.actions;

export default answersSlice.reducer;


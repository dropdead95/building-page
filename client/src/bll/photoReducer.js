import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {photoApi} from "./api/quizApi";

let initialState = {};

export const fetchPhotoGallery = createAsyncThunk(
    "photo/fetchPhotoGallery",
    async () => {
        photoApi.getPhotoData((data) => console.log(data.data));
    }
);
const photoSlice = createSlice({
    name: "photo",
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(fetchPhotoGallery.fulfilled, (state, action) => {
            state.photo = action.payload.data.data;
        });
    },
});

export const {changeData} = photoSlice.actions;

export default photoSlice.reducer;

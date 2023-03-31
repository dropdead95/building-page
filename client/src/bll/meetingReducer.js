import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { meetingApi } from "./api/quizApi";

const initialState = {
  meetingData: {},
};

export const fetchMeetingData = createAsyncThunk(
  "meetingData/fetchMeetingData",
  async () => {
    return meetingApi.getMeetingData((data) => data.data);
  }
);

const meetingSlice = createSlice({
  name: "meetingData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMeetingData.fulfilled, (state, action) => {
      state.meetingData = action.payload.data.data;
    });
  },
});

export default meetingSlice.reducer;

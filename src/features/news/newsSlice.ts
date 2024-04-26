import {createSlice} from "@reduxjs/toolkit";

export interface NewsState {
  latest: string[];
}

const initialState: NewsState = {
  latest: ["E"],
};

const newsSlice = createSlice({
  name: "news",
  initialState: initialState,
  reducers: {},
});

export const newsReducer = newsSlice.reducer;

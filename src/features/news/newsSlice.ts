import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface NewsState {
  stared: Record<string, true>;
}

const initialState: NewsState = {
  stared: {},
};

const newsSlice = createSlice({
  name: "news",
  initialState: initialState,
  reducers: {
    toggleStared: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      if (state.stared[id]) {
        delete state.stared[id];
      } else {
        state.stared[id] = true;
      }
    },
  },
});

export const {toggleStared} = newsSlice.actions;
export const newsReducer = newsSlice.reducer;

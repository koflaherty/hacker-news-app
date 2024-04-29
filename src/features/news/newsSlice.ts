import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface NewsState {
  starred: Record<string, true>;
}

const initialState: NewsState = {
  starred: {},
};

const newsSlice = createSlice({
  name: "news",
  initialState: initialState,
  reducers: {
    toggleStarred: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      if (state.starred[id]) {
        delete state.starred[id];
      } else {
        state.starred[id] = true;
      }
    },
  },
});

export const {toggleStarred} = newsSlice.actions;
export const newsReducer = newsSlice.reducer;

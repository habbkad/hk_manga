import { createSlice } from "@reduxjs/toolkit";

export const chaptersReducer = createSlice({
  name: "chapterImages",
  initialState: {
    chapImages: [],
  },
  reducers: {
    setChapterImages: (state, action) => {
      state.chapImages = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setChapterImages } = chaptersReducer.actions;

export default chaptersReducer.reducer;

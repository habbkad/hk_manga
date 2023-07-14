import { createSlice } from "@reduxjs/toolkit";

export const chaptersReducer = createSlice({
  name: "chapterImages",
  initialState: {
    chapImages: [],
    chaps: [],
  },
  reducers: {
    setChapterImages: (state, action) => {
      state.chapImages = action.payload;
    },
    setChapters: (state, action) => {
      state.chaps = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setChapterImages, setChapters } = chaptersReducer.actions;

export default chaptersReducer.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const latest_manga = createSlice({
  name: "responsiveWidth",
  initialState: {
    manga: [],
  },
  reducers: {
    set_latest_manga: (state, action) => {
      state.manga = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { set_latest_manga, set_carousel } = latest_manga.actions;

export default latest_manga.reducer;

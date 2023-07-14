import { createSlice } from "@reduxjs/toolkit";

export const responsive_width = createSlice({
  name: "responsiveWidth",
  initialState: {
    width: 0,
  },
  reducers: {
    currentWidth: (state, action) => {
      state.width = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { currentWidth } = responsive_width.actions;

export default responsive_width.reducer;

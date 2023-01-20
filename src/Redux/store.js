import { configureStore } from "@reduxjs/toolkit";
import responsive_width from "./reducers/responsive_width";

export default configureStore({
  reducer: {
    pageWidth: responsive_width,
  },
});

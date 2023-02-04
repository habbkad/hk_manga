import { configureStore } from "@reduxjs/toolkit";
import responsive_width from "./reducers/responsive_width";
import latest_manga from "./reducers/latest_manga";
import chapters_reducer from "./reducers/chapters_reducer";
export default configureStore({
  reducer: {
    pageWidth: responsive_width,
    latest: latest_manga,
    chapImages: chapters_reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

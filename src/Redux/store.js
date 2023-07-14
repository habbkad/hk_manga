import { configureStore } from "@reduxjs/toolkit";
import responsive_width from "./reducers/responsive_width";
import latest_manga from "./reducers/latest_manga";
import chapters_reducer from "./reducers/chapters_reducer";
import manga_genres from "./reducers/manga_genres";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  pageWidth: responsive_width,
  latest: latest_manga,
  chapImages: chapters_reducer,
  genres: manga_genres,
});

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

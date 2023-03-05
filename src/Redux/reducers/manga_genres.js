import { createSlice } from "@reduxjs/toolkit";

export const manga_genres = createSlice({
  name: "genres",
  initialState: {
    action: [
      {
        title: "title",
        cover_art: [
          "https://images.unsplash.com/photo-1673040879068-eae7800898a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
          "https://images.unsplash.com/photo-1673040879068-eae7800898a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
          "https://images.unsplash.com/photo-1673040879068-eae7800898a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
        ],
      },
    ],
    web_comic: [
      {
        title: "title",
        cover_art: [
          "https://images.unsplash.com/photo-1673040879068-eae7800898a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
          "https://images.unsplash.com/photo-1673040879068-eae7800898a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
          "https://images.unsplash.com/photo-1673040879068-eae7800898a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
        ],
      },
    ],
    romance: [
      {
        title: "title",
        cover_art: [
          "https://images.unsplash.com/photo-1673040879068-eae7800898a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
          "https://images.unsplash.com/photo-1673040879068-eae7800898a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
          "https://images.unsplash.com/photo-1673040879068-eae7800898a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
        ],
      },
    ],
    comedy: [
      {
        title: "title",
        cover_art: [
          "https://images.unsplash.com/photo-1673040879068-eae7800898a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
          "https://images.unsplash.com/photo-1673040879068-eae7800898a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
          "https://images.unsplash.com/photo-1673040879068-eae7800898a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
        ],
      },
    ],
    martial_art: [
      {
        title: "title",
        cover_art: [
          "https://images.unsplash.com/photo-1673040879068-eae7800898a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
          "https://images.unsplash.com/photo-1673040879068-eae7800898a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
          "https://images.unsplash.com/photo-1673040879068-eae7800898a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
        ],
      },
    ],
    isekai: [
      {
        title: "title",
        cover_art: [
          "https://images.unsplash.com/photo-1673040879068-eae7800898a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
          "https://images.unsplash.com/photo-1673040879068-eae7800898a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
          "https://images.unsplash.com/photo-1673040879068-eae7800898a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
        ],
      },
    ],
    adventure: [
      {
        title: "title",
        cover_art: [
          "https://images.unsplash.com/photo-1673040879068-eae7800898a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
          "https://images.unsplash.com/photo-1673040879068-eae7800898a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
          "https://images.unsplash.com/photo-1673040879068-eae7800898a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
        ],
      },
    ],
    fantasy: [
      {
        title: "title",
        cover_art: [
          "https://images.unsplash.com/photo-1673040879068-eae7800898a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
          "https://images.unsplash.com/photo-1673040879068-eae7800898a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
          "https://images.unsplash.com/photo-1673040879068-eae7800898a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
        ],
      },
    ],
  },
  reducers: {
    set_action: (state, action) => {
      let newData = action.payload;
      let manga = newData.filter(
        (v, i, a) => a.findIndex((v2) => v2.id === v.id) === i
      );
      state.action = manga;
    },
    set_web_comic: (state, action) => {
      let newData = action.payload;
      let manga = newData.filter(
        (v, i, a) => a.findIndex((v2) => v2.id === v.id) === i
      );
      state.web_comic = manga;
    },
    set_romance: (state, action) => {
      let newData = action.payload;
      let manga = newData.filter(
        (v, i, a) => a.findIndex((v2) => v2.id === v.id) === i
      );
      state.romance = manga;
    },
    set_comedy: (state, action) => {
      let newData = action.payload;
      let manga = newData.filter(
        (v, i, a) => a.findIndex((v2) => v2.id === v.id) === i
      );
      state.comedy = manga;
    },
    set_martial_arts: (state, action) => {
      let newData = action.payload;
      let manga = newData.filter(
        (v, i, a) => a.findIndex((v2) => v2.id === v.id) === i
      );
      state.martial_art = manga;
    },
    set_isekai: (state, action) => {
      let newData = action.payload;
      let manga = newData.filter(
        (v, i, a) => a.findIndex((v2) => v2.id === v.id) === i
      );
      state.isekai = manga;
    },
    set_adventure: (state, action) => {
      let newData = action.payload;
      let manga = newData.filter(
        (v, i, a) => a.findIndex((v2) => v2.id === v.id) === i
      );
      state.adventure = manga;
    },
    set_fantasy: (state, action) => {
      let newData = action.payload;
      let manga = newData.filter(
        (v, i, a) => a.findIndex((v2) => v2.id === v.id) === i
      );
      state.fantasy = manga;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  set_action,
  set_adventure,
  set_fantasy,
  set_comedy,
  set_isekai,
  set_martial_arts,
  set_web_comic,
  set_romance,
} = manga_genres.actions;

export default manga_genres.reducer;

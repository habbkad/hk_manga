import { useState, useEffect } from "react";
import mangaApi from "./api";
import {
  set_action,
  set_adventure,
  set_comedy,
  set_fantasy,
  set_isekai,
  set_martial_arts,
  set_romance,
  set_web_comic,
} from "../Redux/reducers/manga_genres";
import { useDispatch } from "react-redux";
import { set_carousel_cover } from "../Redux/reducers/latest_manga";

export const useGenres = () => {
  const dispatch = useDispatch();
  const [genres, setGenre] = useState();

  useEffect(() => {
    const fetchManga = async () => {
      try {
        const { data } = await mangaApi(
          "https://hk-manga.herokuapp.com/manga-app/api/v1/genres"
        );

        if (data) {
          dispatch(set_action(data.action));
          dispatch(set_adventure(data.adventure));
          dispatch(set_comedy(data.comedy));
          dispatch(set_fantasy(data.fantasy));
          dispatch(set_isekai(data.isekai));
          dispatch(set_martial_arts(data.martial_art));
          dispatch(set_romance(data.romance));
          dispatch(set_web_comic(data.web_comic));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchManga();
  }, []);
};

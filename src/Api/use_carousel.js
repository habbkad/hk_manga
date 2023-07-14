import { useState, useEffect } from "react";
import mangaApi from "./api";
import { useDispatch } from "react-redux";
import { set_carousel_cover } from "../Redux/reducers/latest_manga";

export const useCarousel = () => {
  const dispatch = useDispatch();
  const [latestManga, setLatestMange] = useState();

  useEffect(() => {
    const fetchManga = async () => {
      const { data } = await mangaApi(
        "https://hk-manga.herokuapp.com/manga-app/api/v1/carousel"
      );
      const { manga } = data;
      dispatch(set_carousel_cover(manga));
      console.log(manga);
      setLatestMange(manga);
    };
    fetchManga();
    return latestManga;
  }, []);
};

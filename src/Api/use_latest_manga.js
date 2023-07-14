import { useState, useEffect } from "react";
import mangaApi from "./api";
import { set_latest_manga, set_carousel } from "../Redux/reducers/latest_manga";
import { useDispatch } from "react-redux";
import { set_carousel_cover } from "../Redux/reducers/latest_manga";
import { Carousel } from "flowbite";

export const useLatestManga = () => {
  const dispatch = useDispatch();
  const [latestManga, setLatestMange] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchManga = async () => {
      try {
        const { data } = await mangaApi(
          "https://hk-manga.herokuapp.com/manga-app/api/v1/latest"
        );
        const { manga } = data;
        const { carousel } = data;
        setLatestMange(manga);
        dispatch(set_latest_manga(manga));
        console.log(data);
        if (carousel[0] !== null) {
          dispatch(set_carousel_cover(carousel));
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchManga();
  }, []);

  return { loading };
};

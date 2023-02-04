import { useState, useEffect } from "react";
import mangaApi from "./api";
import { set_latest_manga, set_carousel } from "../Redux/reducers/latest_manga";
import { useDispatch } from "react-redux";

export const useLatestManga = () => {
  const dispatch = useDispatch();
  const [latestManga, setLatestMange] = useState();

  useEffect(() => {
    const fetchManga = async () => {
      const { data } = await mangaApi(
        "http://localhost:5001/manga-app/api/v1/latest"
      );
      const { manga } = data;
      setLatestMange(manga);
      dispatch(set_latest_manga(manga));
    };
    fetchManga();
  }, [latestManga]);
};

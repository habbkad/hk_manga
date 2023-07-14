import { useState, useEffect } from "react";
import chaptersApi from "./chapters_api";
import { setChapterImages } from "../Redux/reducers/chapters_reducer";
import { useDispatch } from "react-redux";

export const useChapterImages = (id) => {
  const dispatch = useDispatch();
  const [latestManga, setLatestMange] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchManga = async () => {
      try {
        const data = await chaptersApi(
          "https://hk-manga.herokuapp.com/manga-app/api/v1/images",
          id
        );
        const { chap } = data;
        setLoading(false);
        //   console.log(chap);
        dispatch(setChapterImages(chap));
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchManga();
  }, [id]);

  return loading;
};

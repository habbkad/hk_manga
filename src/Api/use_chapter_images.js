import { useState, useEffect } from "react";
import chaptersApi from "./chapters_api";
import { setChapterImages } from "../Redux/reducers/chapters_reducer";
import { useDispatch } from "react-redux";

export const useChapterImages = (id) => {
  const dispatch = useDispatch();
  const [latestManga, setLatestMange] = useState();

  useEffect(() => {
    const fetchManga = async () => {
      const data = await chaptersApi(
        "https://hk-manga.herokuapp.com/manga-app/api/v1/images",
        id
      );
      const { chap } = data;
      //   console.log(chap);
      dispatch(setChapterImages(chap));
    };
    fetchManga();
  }, [id]);
};

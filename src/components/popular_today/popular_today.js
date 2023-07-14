import React, { useEffect, useState } from "react";
import CoverRatings from "../chap_cover_ratings/cover_ratings";
import CoverTitle from "../chap_cover_title/cover_title";
import PopularCarousel from "./popular_carousel";
import "./popular_today.css";
import { useSelector, useDispatch } from "react-redux";

const PopularToday = () => {
  const [width, setWidth] = useState();
  // const { action, romance, isekai, web_comic, martial_art } = useSelector(
  //   (state) => state.genres
  // );
  const { manga: allGenres } = useSelector((state) => state.latest);

  const arr = [
    allGenres[Math.floor(Math.random() * allGenres.length - 1)],
    allGenres[Math.floor(Math.random() * allGenres.length - 1)],
    allGenres[Math.floor(Math.random() * allGenres.length - 1)],
    allGenres[Math.floor(Math.random() * allGenres.length - 1)],
    allGenres[Math.floor(Math.random() * allGenres.length - 1)],
  ];
  console.log(arr);

  useEffect(() => {
    function handleResize() {
      setWidth(window.outerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return (
    <div className="popular_con">
      <h2>Popular Today</h2>
      <div className="popular_line"></div>

      {width <= 640 ? (
        <div>
          <div className="popular_cover_con"></div>
        </div>
      ) : (
        <div>
          <div className="popular_cover_con">
            {arr.map((item) => {
              if (item !== undefined) {
                return (
                  <div>
                    <CoverRatings data={item} />
                  </div>
                );
              }
            })}
          </div>
        </div>
      )}
      {/*  */}
    </div>
  );
};

export default PopularToday;

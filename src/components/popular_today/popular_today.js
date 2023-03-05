import React, { useEffect, useState } from "react";
import CoverRatings from "../chap_cover_ratings/cover_ratings";
import CoverTitle from "../chap_cover_title/cover_title";
import PopularCarousel from "./popular_carousel";
import "./popular_today.css";
import { useSelector, useDispatch } from "react-redux";

const PopularToday = () => {
  const newWidth = useSelector((state) => state.pageWidth);
  const [width, setWidth] = useState();
  const { action, romance, isekai, web_comic, martial_art } = useSelector(
    (state) => state.genres
  );

  const arr = [action[0], romance[0], isekai[0], web_comic[0], martial_art[0]];
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
          <div className=""></div>
        </div>
      ) : (
        <div>
          <div className="popular_cover_con">
            {arr.map((item) => {
              console.log(item);
              return (
                <div>
                  <CoverRatings data={item} />
                </div>
              );
            })}
          </div>
        </div>
      )}
      {/*  */}
    </div>
  );
};

export default PopularToday;

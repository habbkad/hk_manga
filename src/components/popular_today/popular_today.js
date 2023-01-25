import React, { useEffect, useState } from "react";
import CoverRatings from "../chap_cover_ratings/cover_ratings";
import CoverTitle from "../chap_cover_title/cover_title";
import PopularCarousel from "./popular_carousel";
import "./popular_today.css";
import { useSelector, useDispatch } from "react-redux";

const PopularToday = () => {
  const newWidth = useSelector((state) => state.pageWidth);
  const [width, setWidth] = useState();

  const arr = ["a", "a", 1, 4, 5, 2];
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
          <div className="popular_cover_con">
            <PopularCarousel />
          </div>
        </div>
      ) : (
        <div>
          <div className="popular_cover_con">
            {arr.map((item) => {
              return (
                <div>
                  <CoverRatings />
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

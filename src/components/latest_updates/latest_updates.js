import React, { useEffect, useState } from "react";
import CoverChaps from "../chap_cover_chaps/cover_chaps";
import "./latest_updates.css";

const LatestUpdates = () => {
  const [width, setWidth] = useState();
  const arr = [1, 4, 3, 2, 3, 2, 4, 5, 5, 5, 4, 3];
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
    <div className="latest_con">
      <div>
        <h1>Latest updates</h1>
        <div className="latest_line"></div>
      </div>

      <div
        class={
          width == 375 ? "latest_chaps" : "grid grid-rows-5 grid-flow-col gap-4"
        }
      >
        {arr.map(() => {
          return (
            <div>
              <CoverChaps />
            </div>
          );
        })}
      </div>
      <button
        type="button"
        class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-5 py-0 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
        id="viewAllBtn"
      >
        View all latest
      </button>
    </div>
  );
};

export default LatestUpdates;

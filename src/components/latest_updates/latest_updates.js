import React, { useEffect, useState } from "react";
import CoverChaps from "../chap_cover_chaps/cover_chaps";
import "./latest_updates.css";
import { useSelector } from "react-redux";

const LatestUpdates = () => {
  const [width, setWidth] = useState();
  const [dropNumber, setDropNum] = useState(23);
  const { manga } = useSelector((state) => state.latest);

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

  // useEffect(() => {
  //   function getManga() {
  //     let { manga } = data;
  //     setManga(manga);
  //   }
  //   getManga();
  // }, [manga]);
  console.log(manga);
  return (
    <div className="latest_con">
      <div>
        <h1>Latest updates</h1>
        <div className="latest_line"></div>
      </div>

      <div
        class={
          width <= 640
            ? "latest_chaps"
            : "grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap1 sm:mt-"
        }
      >
        {manga ? (
          manga.map((item, index) => {
            if (index <= dropNumber) {
              return (
                <div key={item.id}>
                  <CoverChaps manga={item} />
                </div>
              );
            }
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <button
        type="button"
        class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-5 py-0 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
        id="viewAllBtn"
        onClick={(e) => {
          setDropNum(dropNumber + 9);
        }}
      >
        View all latest
      </button>
    </div>
  );
};

export default LatestUpdates;

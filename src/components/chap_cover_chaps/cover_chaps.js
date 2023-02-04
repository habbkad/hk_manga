import React from "react";
import "./cover_chaps.css";
import { useNavigate } from "react-router";

const CoverChaps = ({ manga }) => {
  let chaps = [];
  const navigate = useNavigate();
  if (manga.chapters && manga.chapters.length > 3) {
    chaps.push(manga.chapters[manga.chapters.length - 1]);
    chaps.push(manga.chapters[manga.chapters.length - 2]);
    chaps.push(manga.chapters[manga.chapters.length - 3]);
  }

  return (
    <div>
      <div className="cover_ch">
        <div className="image_ch_con">
          <img
            class="image_ch"
            src={manga.cover_art[2]}
            alt="image description"
            onClick={(e) => {
              navigate("/manga/", { state: { manga } });
            }}
          />
        </div>
        <div className="cover_chaps">
          <p class="text-lg text-gray-900 dark:text-white w-24 h-14 text-ellipsis overflow-hidden">
            {manga.title}
          </p>
          {chaps.map((item) => {
            return (
              <div>
                {" "}
                <button
                  type="button"
                  class=" text-red-700  hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-5  text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                  id="chapBtn"
                >
                  <p class="text-base text-red-700 dark:text-red-700">
                    Chapter:{item.chapter}
                  </p>
                </button>
              </div>
            );
          })}

          <button
            type="button"
            class=" text-red-700  hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-5  text-center mr-2 mb-1 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
            id="chapBtn"
          >
            All Chapters
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoverChaps;

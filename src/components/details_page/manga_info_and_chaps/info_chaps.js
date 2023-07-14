import React from "react";
import ChapsCon from "../chapters_container/chaps_con";
import "./info_chaps.css";

const InfoChaps = ({ manga }) => {
  console.log(manga);
  return (
    <div>
      <div className="info_chaps_con">
        <div className="detail_info_con">
          <div>
            <p class="ml-5 text-left text-gray-500 md:text-sm dark:text-gray-400 ">
              Type {"  "}
              <span class="text-lg ml-4 text-gray-900 dark:text-white">
                {" "}
                {manga.genre !== [] ? manga.genre[1] : "Not provided"}
              </span>
            </p>
          </div>
          <div class="mt-4">
            <p class=" ml-5 text-left text-gray-500 md:text-sm dark:text-gray-400">
              Status {"  "}
              <span class="text-lg ml-4 text-gray-900 dark:text-white">
                {manga.status}
              </span>
            </p>
          </div>
          <div class="mt-4">
            <p class=" ml-5 text-left text-gray-500 md:text-sm dark:text-gray-400">
              Released {"  "}
              <span class="text-lg ml-4 text-gray-900 dark:text-white">
                Not provided
              </span>
            </p>
          </div>
          <div class="mt-4">
            <p class=" ml-5 text-left text-gray-500 md:text-sm dark:text-gray-400">
              Author {"  "}
              <span class="text-lg ml-4 text-gray-900 dark:text-white">
                {manga.author}
              </span>
            </p>
          </div>
          <div class="mt-4">
            <p class="ml-5 text-left text-gray-500 md:text-sm dark:text-gray-400">
              Artist {"  "}
              <span class="text-lg ml-4 text-gray-900 dark:text-white">
                Not provided
              </span>
            </p>
          </div>
          <div class="mt-4">
            <p class="ml-5 text-left text-gray-500 md:text-sm dark:text-gray-400">
              Translation {"  "}
              <span class="text-lg ml-4 text-gray-900 dark:text-white">
                Not provided
              </span>
            </p>
          </div>
          <div class="mt-4">
            <p class=" ml-5 text-left text-gray-500 md:text-sm dark:text-gray-400">
              Date {"  "}
              <span class="text-lg ml-4 text-gray-900 dark:text-white">
                Not provided
              </span>
            </p>
          </div>
        </div>
        <div className="detail_chap_con">
          <ChapsCon chapters={manga.chapters} title={manga.title} />
        </div>
      </div>
    </div>
  );
};

export default InfoChaps;

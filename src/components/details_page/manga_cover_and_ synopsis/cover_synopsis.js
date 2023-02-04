import React from "react";
import "./cover_synopsis.css";

const CoverSynopsis = ({ manga }) => {
  const width = window.outerWidth;
  return (
    <div>
      {" "}
      <div
        className="bg-image"
        style={{ backgroundImage: `url(${manga.cover_art[2]})` }}
      ></div>
      <div className="synopsis_con">
        <div className="synopsis_details_con">
          <div className="synopsis_cover_con">
            <img
              class="details_cover_image h-auto max-w-xl rounded-lg shadow-xl dark:shadow-gray-800"
              src={manga.cover_art[2]}
              alt="image description"
            />

            <button
              type="button"
              class=" mt-4 w-72 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Red
            </button>
          </div>
          <div className="synopsis_detail_con">
            <div className="synopsis_details_sub_con">
              <p class="text-5xl  font-bold text-gray-900 dark:text-white">
                {manga.title}
              </p>
              <p class="text-lg text-gray-900 dark:text-white">Author</p>
              <p class="text-sm text-gray-900 dark:text-white">Abe lincon</p>

              <p class="text-lg text-gray-900 dark:text-white mt-3">Genre</p>
              <div className="flex">
                {manga.genre.map((item, index) => {
                  return (
                    <div key={index}>
                      <button type="button" class=" synopsis_genres ">
                        {item}
                      </button>
                    </div>
                  );
                })}
              </div>

              <p class="text-2xl mt-7 font-semibold text-gray-900 dark:text-white">
                synopsis
              </p>
              <div
                class="synopsis_text_con mt-3 overscroll-auto overflow-y-scroll 
                 p-2 h:56 md:h-56 font-medium text-gray-900 dark:text-white sm:mt-0  sm:text-sm"
              >
                {manga.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverSynopsis;

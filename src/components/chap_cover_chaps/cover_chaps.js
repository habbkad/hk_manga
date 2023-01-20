import React from "react";
import "./cover_chaps.css";

const CoverChaps = () => {
  return (
    <div>
      <div className="cover_ch">
        <div className="image_ch_con">
          <img
            class="image_ch"
            src="https://images.unsplash.com/photo-1674059391721-c4740162af2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="image description"
          />
        </div>
        <div className="cover_chaps">
          <h3
            style={{
              alignSelf: "center",
              color: "white",
              marginTop: 15,
              marginBottom: 10,
            }}
          >
            title
          </h3>
          <button
            type="button"
            class=" text-red-700  hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-5  text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
            id="chapBtn"
          >
            Red
          </button>
          <button
            type="button"
            class=" text-red-700  hover:text-white border border-red-700 hover:bg-red-800 focus:ring-3 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-5  text-center mr-2 mb-1 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
            id="chapBtn"
          >
            Red
          </button>
          <button
            type="button"
            class=" text-red-700  hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-5  text-center mr-2 mb-1 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
            id="chapBtn"
          >
            Red
          </button>
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

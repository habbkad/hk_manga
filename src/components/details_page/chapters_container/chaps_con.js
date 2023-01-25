import React from "react";
import "./chaps_con.css";

const ChapsCon = () => {
  const arr = [2, 3, 3, 2, 3, 3, 4, 3, 2, 2, 2, 3, 3, 2, 3, 3, 4, 3, 2, 2, 2];
  return (
    <div>
      <p class="text-2xl text-gray-900 dark:text-white mb-1">Chapters</p>

      <div className="chap_red_line"></div>
      <div className="chap_btns mt-3">
        <button
          type="button"
          class="focus:outline-none h-20 w-96 ml-1 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-2xl text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Red
        </button>
        <button
          type="button"
          class="focus:outline-none h-20 w-96 ml-1 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-2xl text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Red
        </button>
      </div>
      <div>
        {/* chaps scroll container */}

        <div
          class="chaps_scroll_con  overscroll-auto overflow-y-scroll 
                 p-2 h-64 mt-3"
        >
          <div class="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap1 sm:mt-1">
            {arr.map((item) => {
              return (
                <div>
                  <button
                    type="button"
                    class="text-gray-900  h-16 w-44  bg-white border border-red-600 focus:outline-none hover:bg-red-600  font-medium rounded-lg text-sm px-5 py-2.5 md:mr-2 mb-2 sm:mr-0 dark:bg-gray-900 dark:text-white  dark:hover:bg-red-600  "
                  >
                    Light
                  </button>
                </div>
              );
            })}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapsCon;

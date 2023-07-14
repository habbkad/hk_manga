import React from "react";

const PopularCarousel = ({ data }) => {
  return (
    <div>
      <div id="controls-carousel" class="relative" data-carousel="static">
        <div class="grid grid-rows-4 grid-flow-col gap-4">
          <div>01</div>

          <div>09</div>
        </div>
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
          {/* <div class="hidden duration-300 ease-in-out" data-carousel-item>
            <div>
              {" "}
              <h3
                style={{
                  alignSelf: "center",
                  color: "white",
                  height: 50,
                  marginTop: 15,
                }}
              >
                title
              </h3>
              <img
                src={data[0].cover_art[2]}
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
          </div> */}
          {/* {data.map((item) => {
            return (
              <div class="hidden duration-300 ease-in-out" data-carousel-item>
                <div>
                  {" "}
                  <h3
                    style={{
                      alignSelf: "center",
                      color: "white",
                      height: 50,
                      marginTop: 15,
                    }}
                  >
                    title
                  </h3>
                  <img
                    src={item.cover_art[2]}
                    class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
              </div>
            );
          })} */}
          {/* <button
            type="button"
            class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                aria-hidden="true"
                class="w-6 h-6 text-white dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              <span class="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                aria-hidden="true"
                class="w-6 h-6 text-white dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              <span class="sr-only">Next</span>
            </span>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default PopularCarousel;

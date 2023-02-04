import React from "react";
import Navbar from "../navbar/navbar";
import "./carousel.css";
import { useSelector } from "react-redux";

const Carousel = () => {
  const { manga } = useSelector((state) => state.latest);

  let carouselImages;
  let carouselDetails;
  if (manga) {
    carouselImages = manga.slice(0, 5);
    carouselDetails = carouselImages.map((item) => {
      const { cover_art } = item;
      const { title } = item;
      return { cover_art, title };
    });
  }
  console.log(carouselDetails);
  let img =
    "https://images.unsplash.com/photo-1673040879068-eae7800898a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60";

  return (
    <div>
      {" "}
      <div>
        <div id="controls-carousel" class="relative" data-carousel="static">
          {/* <!-- Carousel wrapper --> */}
          <div class=" relative h-56 overflow-hidden rounded-lg md:h-96">
            {/* <!-- Item 1 --> */}
            <div class=" hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src={img}
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />{" "}
              <div className="carousel_genres_con">
                <h1 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                  title
                </h1>
                <div>
                  <button type="button" class=" carousel_genres ">
                    Action
                  </button>
                </div>
              </div>
              <div>
                <div className="carousel_genres_con">
                  <h1 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    title
                  </h1>
                  <div>
                    <button type="button" class=" carousel_genres ">
                      Action
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Item 2 --> */}
            <div
              class="hidden duration-700 ease-in-out"
              data-carousel-item="active"
            >
              <img
                src={img}
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
              <div className="carousel_genres_con">
                <h1 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                  title
                </h1>
                <div>
                  <button type="button" class=" carousel_genres ">
                    Action
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- Item 3 --> */}
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src={img}
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />{" "}
              <div className="carousel_genres_con">
                <h1 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                  title
                </h1>
                <div>
                  <button type="button" class=" carousel_genres ">
                    Action
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- Item 4 --> */}
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src={img}
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />{" "}
              <div className="carousel_genres_con">
                <h1 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                  title
                </h1>
                <div>
                  <button type="button" class=" carousel_genres ">
                    Action
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- Item 5 --> */}
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src={img}
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />{" "}
              <div className="carousel_genres_con">
                <h1 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                  title
                </h1>
                <div>
                  <button type="button" class=" carousel_genres ">
                    Action
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Slider controls --> */}
          <button
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
          </button>
        </div>
      </div>
      <div className="genres_bar">
        <div>
          <h2 className="genre-text">Browse By Genre </h2>
        </div>
        <button type="button" class=" button_genres ">
          Action
        </button>
        <button type="button" class=" button_genres ">
          Apocalypse
        </button>
        <button type="button" class=" button_genres ">
          Comedy
        </button>
        <button type="button" class=" button_genres ">
          Adventure
        </button>
        <button type="button" class=" button_genres ">
          Isekai
        </button>
        <button type="button" class=" button_genres_more ">
          All Genres >
        </button>
      </div>
      <div className="carousel_genres_con_mobile">
        <h1 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          title
        </h1>
        <div>
          <button type="button" class=" carousel_genres ">
            Action
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

{
  /* <div>
                <div className="carousel_genres_con">
                  <h1 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    title
                  </h1>
                  <div>
                    <button type="button" class=" carousel_genres ">
                      Action
                    </button>
                  </div>
                </div>
              </div> */
}

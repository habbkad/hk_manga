import React from "react";
import Navbar from "../navbar/navbar";
import "./carousel.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Carousel = () => {
  const navigate = useNavigate();
  const { carousel } = useSelector((state) => state.latest);
  const { action, romance, isekai, web_comic, martial_art } = useSelector(
    (state) => state.genres
  );
  const { manga: allGenres } = useSelector((state) => state.latest);

  return (
    <div>
      <div>
        <div id="controls-carousel" class="relative" data-carousel="slide">
          {/* <!-- Carousel wrapper --> */}
          <div
            class=" relative  overflow-hidden rounded-lg  carousel_hight"
            style={{ height: 500 }}
          >
            {/* <!-- Item 1 --> */}
            <div
              class=" hidden duration-700 ease-in-out bg-gradient-to-r from-gradientCol"
              data-carousel-item
            >
              <img
                src={carousel[0].cover_art[0]}
                class="absolute carousel_Image"
                style={{
                  width: "50%",
                  height: "90%",
                  marginLeft: "40%",
                  marginRight: "10%",
                  marginTop: "1.5%",
                  borderRadius: "20px",
                }}
                alt="..."
                onClick={() => {
                  navigate(`/manga/${carousel[0].id}`, {
                    state: { manga: carousel[0] },
                  });
                }}
              />{" "}
              <div className="carousel_genres_con w-96">
                <h1 class="mb-4 text-clip text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-xl md:text-left lg:text-5xl dark:text-white sm:text-center">
                  {carousel[0].title}
                </h1>
                <div>
                  {carousel ? (
                    carousel[0].genre.map((item, index) => {
                      if (index <= 3) {
                        return (
                          <button type="button" class=" carousel_genres ">
                            {item}
                          </button>
                        );
                      }
                    })
                  ) : (
                    <button type="button" class=" carousel_genres ">
                      Genres
                    </button>
                  )}
                </div>
              </div>
            </div>
            {/* <!-- Item 2 --> */}
            <div
              class="hidden  duration-700 ease-in-out bg-gradient-to-r from-gradientCol "
              data-carousel-item="active"
            >
              <img
                src={carousel[1].cover_art[0]}
                class="absolute carousel_Image"
                style={{
                  width: "50%",
                  height: "90%",
                  marginLeft: "40%",
                  marginRight: "10%",
                  marginTop: "1.5%",
                  borderRadius: "20px",
                }}
                alt="..."
                onClick={() => {
                  navigate(`/manga/${carousel[1].id}`, {
                    state: { manga: carousel[1] },
                  });
                }}
              />{" "}
              <div className="carousel_genres_con w-96">
                <h1 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-xl md:text-left lg:text-5xl dark:text-white sm:text-center ">
                  {carousel[1].title}
                </h1>
                <div>
                  {carousel ? (
                    carousel[1].genre.map((item, index) => {
                      if (index <= 3) {
                        return (
                          <button type="button" class=" carousel_genres ">
                            {item}
                          </button>
                        );
                      }
                    })
                  ) : (
                    <button type="button" class=" carousel_genres ">
                      Genres
                    </button>
                  )}
                </div>
              </div>
            </div>
            {/* <!-- Item 3 --> */}
            <div
              class=" hidden duration-700 ease-in-out bg-gradient-to-r from-gradientCol "
              data-carousel-item
            >
              <img
                src={carousel[2].cover_art[0]}
                class="absolute md- carousel_Image "
                style={{
                  width: "50%",
                  height: "90%",
                  marginLeft: "40%",
                  marginRight: "10%",
                  marginTop: "1.5%",
                  borderRadius: "20px",
                }}
                alt="..."
                onClick={() => {
                  navigate(`/manga/${carousel[2].id}`, {
                    state: { manga: carousel[2] },
                  });
                }}
              />{" "}
              <div className="carousel_genres_con w-96">
                <h1 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-xl md:text-left lg:text-5xl dark:text-white sm:text-center">
                  {carousel[2].title}
                </h1>
                <div>
                  {carousel ? (
                    carousel[2].genre.map((item, index) => {
                      if (index <= 3) {
                        return (
                          <button type="button" class=" carousel_genres ">
                            {item}
                          </button>
                        );
                      }
                    })
                  ) : (
                    <button type="button" class=" carousel_genres ">
                      Genres
                    </button>
                  )}
                </div>
              </div>
            </div>
            {/* <!-- Item 4 --> */}
            <div
              class=" hidden duration-700 ease-in-out bg-gradient-to-r from-gradientCol "
              data-carousel-item
            >
              <img
                src={carousel[3].cover_art[0]}
                class="absolute carousel_Image "
                style={{
                  width: "50%",
                  height: "90%",
                  marginLeft: "40%",
                  marginRight: "10%",
                  marginTop: "1.5%",
                  borderRadius: "20px",
                }}
                alt="..."
                onClick={() => {
                  navigate(`/manga/${carousel[3].id}`, {
                    state: { manga: carousel[3] },
                  });
                }}
              />{" "}
              <div className="carousel_genres_con w-96">
                <h1 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-xl md:text-left lg:text-5xl dark:text-white sm:text-center">
                  {carousel[3].title}
                </h1>
                <div>
                  {carousel ? (
                    carousel[3].genre.map((item, index) => {
                      if (index <= 3) {
                        return (
                          <button type="button" class=" carousel_genres ">
                            {item}
                          </button>
                        );
                      }
                    })
                  ) : (
                    <button type="button" class=" carousel_genres ">
                      Genres
                    </button>
                  )}
                </div>
              </div>
            </div>
            {/* <!-- Item 5 --> */}
            <div
              class=" hidden duration-700 ease-in-out bg-gradient-to-r from-gradientCol "
              data-carousel-item
            >
              <img
                src={carousel[4].cover_art[0]}
                class="absolute carousel_Image"
                style={{
                  width: "50%",
                  height: "90%",
                  marginLeft: "40%",
                  marginRight: "10%",
                  marginTop: "1.5%",
                  borderRadius: "20px",
                }}
                alt="..."
                onClick={() => {
                  navigate(`/manga/${carousel[4].id}`, {
                    state: { manga: carousel[4] },
                  });
                }}
              />{" "}
              <div className="carousel_genres_con w-96">
                <h1 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-xl md:text-left lg:text-5xl dark:text-white sm:text-center">
                  {carousel[4].title}
                </h1>
                <div>
                  {carousel ? (
                    carousel[4].genre.map((item, index) => {
                      if (index <= 3) {
                        return (
                          <button type="button" class=" carousel_genres ">
                            {item}
                          </button>
                        );
                      }
                    })
                  ) : (
                    <button type="button" class=" carousel_genres ">
                      Genres
                    </button>
                  )}
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
        <button
          type="button"
          class=" button_genres "
          onClick={(e) => {
            let manga = action;

            navigate(`/series/${"genre-action"}`, { state: manga });
          }}
        >
          Action
        </button>
        <button
          type="button"
          class=" button_genres "
          onClick={(e) => {
            let manga = romance;
            navigate(`/series/${"genre-romance"}`, { state: manga });
          }}
        >
          Romance
        </button>
        <button
          type="button"
          class=" button_genres "
          onClick={(e) => {
            let manga = isekai;
            navigate(`/series/${"genre-isekai"}`, { state: manga });
          }}
        >
          Comedy
        </button>
        <button
          type="button"
          class=" button_genres "
          onClick={(e) => {
            let manga = web_comic;
            navigate(`/series/${"genre-web-comic"}`, { state: manga });
          }}
        >
          Web-toon
        </button>
        <button
          type="button"
          class=" button_genres "
          onClick={(e) => {
            let manga = martial_art;
            navigate(`/series/${"genre-martial-arts"}`, { state: manga });
          }}
        >
          Martial arts
        </button>
        <button
          type="button"
          class=" button_genres_more "
          onClick={(e) => {
            let manga = allGenres;
            navigate(`/series/${"all-genres"}`, { state: manga });
          }}
        >
          All Genres >
        </button>
      </div>
      {/* <div className="carousel_genres_con_mobile">
        <h1 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          title
        </h1>
        <div>
          <button type="button" class=" carousel_genres ">
            Action
          </button>
        </div>
      </div> */}
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

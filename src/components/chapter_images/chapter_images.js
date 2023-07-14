import React, { useState, useEffect } from "react";
import "./chapter_images.css";
import { setChapterImages } from "../../Redux/reducers/chapters_reducer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useChapterImages } from "../../Api/use_chapter_images";
import { useNavigate } from "react-router";

const ChapterImages = ({ title, id, chapter }) => {
  const chapImages = useSelector((state) => state.chapImages);
  const chaps = useSelector((state) => state.chapImages);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const chapters = chaps.chaps;
  let prevChap;

  window.onpopstate = () => {
    window.location.reload();
  };

  useEffect(() => {
    // Anything in here is fired on component mount.
    return () => {
      dispatch(setChapterImages([]));
    };
  }, []);
  console.log(chaps.chaps);
  return (
    <div>
      <div className="chap_number  	flex-col  md:flex-row place-content-center 	">
        <p class="md:text-2xl lg:text-2xl text-md font-normal text-gray-900 dark:text-white ">
          {title}
        </p>

        <p class="md:text-2xl lg:text-2xl text-md font-normal text-gray-900 dark:text-white ml-6">
          chapter{": " + chapter}
        </p>
      </div>

      <div className="flex justify-around mt-10	">
        <div>
          <div class="dropdown relative">
            <button
              class="
          dropdown-toggle
          px-3
          py-2.5
          md:w-28
          sm:w-16
          bg-blue-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded-full
          shadow-md
         text-white bg-red-700 hover:bg-red-800 focus:outline-none  focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        "
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              chapter {chapter}
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="caret-down"
                class="w-2 ml-2"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                ></path>
              </svg>
            </button>
            <ul
              class="
          dropdown-menu
          min-w-max
          absolute
          hidden
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          hidden
          m-0
          bg-clip-padding
          border-none
        "
              aria-labelledby="dropdownMenuButton1"
            >
              {chapters.map((item) => {
                return (
                  <div>
                    <li>
                      <a
                        class=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 "
                        onClick={(e) => {
                          navigate(`/chapter/${title}/${item.id}`, {
                            state: { item, title, chapter: item.chapter },
                          });
                          window.location.reload();
                        }}
                      >
                        chapter {item.chapter}
                      </a>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex">
          <button
            type="button"
            class="text-white   focus:outline-none  focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:hover:bg-red-700 dark:bg-red-600 dark:focus:ring-red-900"
            onClick={(e) => {
              for (let i = 0; i < chapters.length; i++) {
                const element = chapters[i];
                if (element.chapter == chapter && chapters[i - 1]) {
                  navigate(`/chapter/${title}/${chapters[i - 1].id}`, {
                    state: {
                      item: prevChap,
                      title,
                      chapter: chapters[i - 1].chapter,
                    },
                  });
                  window.location.reload();
                }
                console.log(element);
              }
            }}
          >
            prev
          </button>
          <button
            type="button"
            class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            onClick={(e) => {
              for (let i = 0; i < chapters.length; i++) {
                const element = chapters[i];
                if (element.chapter == chapter && chapters[i + 1]) {
                  navigate(`/chapter/${title}/${chapters[i + 1].id}`, {
                    state: {
                      item: prevChap,
                      title,
                      chapter: chapters[i + 1].chapter,
                    },
                  });
                  window.location.reload();
                }
                console.log(element);
              }
            }}
          >
            next
          </button>
        </div>
      </div>
      <div className=" chap_images_container ">
        {chapImages.chapImages ? (
          chapImages.chapImages.map((item) => {
            return (
              <div className="chap_images">
                <img class="h-auto " src={item} alt="image description" />
              </div>
            );
          })
        ) : (
          <div className="chap_images">
            <p className=" text-white">loading...</p>
          </div>
        )}
      </div>
      <div className="flex justify-around mt-10	">
        {" "}
        <div className="flex ">
          <button
            type="button"
            class="text-white   focus:outline-none  focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:hover:bg-red-700 dark:bg-red-600 dark:focus:ring-red-900"
            onClick={(e) => {
              for (let i = 0; i < chapters.length; i++) {
                const element = chapters[i];
                if (element.chapter == chapter && chapters[i - 1]) {
                  navigate(`/chapter/${title}/${chapters[i - 1].id}`, {
                    state: {
                      item: prevChap,
                      title,
                      chapter: chapters[i - 1].chapter,
                    },
                  });
                  window.location.reload();
                }
                console.log(element);
              }
            }}
          >
            prev
          </button>
          <button
            type="button"
            class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            onClick={(e) => {
              for (let i = 0; i < chapters.length; i++) {
                const element = chapters[i];
                if (element.chapter == chapter && chapters[i + 1]) {
                  navigate(`/chapter/${title}/${chapters[i + 1].id}`, {
                    state: {
                      item: prevChap,
                      title,
                      chapter: chapters[i + 1].chapter,
                    },
                  });
                  window.location.reload();
                }
                console.log(element);
              }
            }}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChapterImages;

import React from "react";
import "./cover_synopsis.css";

const CoverSynopsis = () => {
  const width = window.outerWidth;
  return (
    <div>
      {" "}
      <div className="bg-image"></div>
      <div className="synopsis_con">
        <div className="synopsis_details_con">
          <div className="synopsis_cover_con">
            <img
              class="details_cover_image h-auto max-w-xl rounded-lg shadow-xl dark:shadow-gray-800"
              src="https://images.unsplash.com/photo-1674316809897-994d01f2897c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="image description"
            />

            <button
              type="button"
              class=" mt-4 w-72 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Red
            </button>
          </div>
          <div className="synopsis_details_con">
            <div className="synopsis_details_sub_con">
              <p class="text-6xl font-bold text-gray-900 dark:text-white">
                title
              </p>
              <p class="text-lg text-gray-900 dark:text-white">Author</p>
              <button type="button" class=" synopsis_genres ">
                Action
              </button>

              <p class="text-2xl mt-7 font-semibold text-gray-900 dark:text-white">
                synopsis
              </p>
              <div
                class="synopsis_text_con mt-3 overscroll-auto overflow-y-scroll 
                 p-2 h:56 md:h-56 font-medium text-gray-900 dark:text-white sm:mt-0  sm:text-sm"
              >
                The Al-powered app will help you improve yourself by analysing
                your everyday life. Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Nihil corrupti soluta sit eos libero! Vel quis
                modi illo nihil tenetur est iste sed soluta assumenda. Eos
                perferendis laboriosam optio accusamus! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Sed, non quisquam at dolores
                odio quaerat quibusdam officiis eos quas ipsum fugiat
                praesentium ea quis maiores fuga labore voluptate odit eveniet!
                Lorem
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverSynopsis;

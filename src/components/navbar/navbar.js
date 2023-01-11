import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import discord from "../../assets/icons8-discord-color/icons8-discord-48.svg";
import pinterest from "../../assets/icons8-pinterest-color/icons8-pinterest-48.svg";
const Navbar = () => {
  return (
    <div className="navbar_container">
      <div className="nav_links">
        {" "}
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <ul>
          <li class="ml-10">
            <Link to={"#"}>
              <h2 className="link">Home</h2>
            </Link>
          </li>
          <li class="ml-6">
            <Link to={"#"}>
              {" "}
              <h2 className="link">Manga List</h2>
            </Link>
          </li>
          <li class="ml-6">
            <Link to={"#"}>
              {" "}
              <h2 className="link">Genres</h2>
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav_logo"></div>
      <div className="nav_search_socials">
        {/* search bar input */}
        <div>
          <form>
            <label for="simple-search" class="sr-only">
              Search
            </label>
            <div class="relative w-full">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                class=" search bg-gray-900 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-red-600 focus:border-red-600 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-red-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-600 dark:focus:border-red-600"
                placeholder="Search"
                required
              />
            </div>
          </form>
        </div>
        <img src={discord} class=" socials ml-10" />
        <img src={pinterest} class="socials ml-10 mr-5" />
      </div>
    </div>
  );
};

export default Navbar;

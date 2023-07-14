import React, { useState, useEffect } from "react";
import CoverRatings from "../../chap_cover_ratings/cover_ratings";
import Paginate from "../manga_pagination/manga_pagination";
import "./series_genres.css";
import { useLocation } from "react-router";

const SeriesGenres = () => {
  const location = useLocation();
  const [mangas, setManga] = useState([]);
  const manga = location.state;
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);

  console.log(manga);

  useEffect(() => {
    const load_Data = () => {
      if (manga !== undefined) {
        setManga(manga);
      } else {
        setManga([]);
      }
    };

    load_Data();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = mangas.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(mangas.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div className=" ">
      {mangas ? (
        <div class=" ">
          <div style={{ marginLeft: "10%" }}>
            <p class="text-3xl text-gray-900 dark:text-white">{"Genre"}</p>
          </div>
          <div className="series_red_line"></div>
          <div class="series_cols_con grid grid-cols-2 lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-2 gap1 sm:mt-1">
            {currentPosts.map((item) => {
              return <div>{<CoverRatings data={item} />}</div>;
            })}
          </div>
          <div className="pagination_btns">
            <Paginate
              postsPerPage={postsPerPage}
              totalPosts={mangas.length}
              paginate={paginate}
              previousPage={previousPage}
              nextPage={nextPage}
            />
          </div>
        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
};

export default SeriesGenres;

import React, { useState, useEffect } from "react";
import CoverRatings from "../../chap_cover_ratings/cover_ratings";
import Paginate from "../manga_pagination/manga_pagination";
import "./series_genres.css";

const SeriesGenres = () => {
  const [manga, setManga] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);

  // ...

  useEffect(() => {
    const load_Data = () => {
      setManga([
        1, 3, 3, 3, 2, 2, 1, 2, 3, 3, 3, 2, 1, 1, 2, 2, 3, 3, 3, 2, 2, 2, 1, 3,
        3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 2, 2, 1, 2, 3, 3, 3, 2, 1, 1, 2, 2, 3,
        3, 3, 2, 2, 2, 1, 3, 3, 3, 3, 3, 3, 3, 3,
      ]);
    };

    load_Data();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = manga.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(manga.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div>
      {manga ? (
        <div class="">
          {" "}
          <div style={{ marginLeft: "10%" }}>
            <p class="text-3xl text-gray-900 dark:text-white">{"Genre"}</p>
          </div>
          <div className="series_red_line"></div>
          <div class="series_cols_con grid grid-cols-2 lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-2 gap1 sm:mt-1">
            {currentPosts.map((item) => {
              return (
                <div>
                  <CoverRatings />
                  {item}
                </div>
              );
            })}
          </div>
          <div className="pagination_btns">
            <Paginate
              postsPerPage={postsPerPage}
              totalPosts={manga.length}
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

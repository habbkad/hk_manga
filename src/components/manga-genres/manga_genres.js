import React from "react";
import CoverRatings from "../chap_cover_ratings/cover_ratings";

const MangaGenres = ({ data }) => {
  return (
    <div>
      <div class="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap1 sm:mt-1">
        {data.map((item) => {
          return <CoverRatings data={item} />;
        })}
      </div>
    </div>
  );
};

export default MangaGenres;

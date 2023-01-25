import React from "react";
import CoverSynopsis from "../../components/details_page/manga_cover_and_ synopsis/cover_synopsis";
import InfoChaps from "../../components/details_page/manga_info_and_chaps/info_chaps";

const MangaDetails = () => {
  return (
    <div>
      <CoverSynopsis />
      <InfoChaps />
    </div>
  );
};

export default MangaDetails;

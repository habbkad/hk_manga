import React from "react";
import CoverSynopsis from "../../components/details_page/manga_cover_and_ synopsis/cover_synopsis";
import InfoChaps from "../../components/details_page/manga_info_and_chaps/info_chaps";
import { useLocation, useParams } from "react-router";
const MangaDetails = (props) => {
  const location = useLocation();
  const { manga } = location.state;
  let { id } = useParams();

  return (
    <div>
      <CoverSynopsis manga={manga} />
      <InfoChaps manga={manga} />
    </div>
  );
};

export default MangaDetails;

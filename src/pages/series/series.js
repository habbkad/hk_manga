import React from "react";
import SeriesGenres from "../../components/series_genre/series_genres/series_genres";
import { useParams } from "react-router";

const Series = () => {
  const { name } = useParams();

  return (
    <div className="max-h-full">
      <SeriesGenres />
    </div>
  );
};

export default Series;

import React, { useEffect } from "react";
import Carousel from "../../components/carousel/carousel";
import LatestUpdates from "../../components/latest_updates/latest_updates";
import Navbar from "../../components/navbar/navbar";
import PopularToday from "../../components/popular_today/popular_today";
import { useLatestManga } from "../../Api/use_latest_manga";
import { useGenres } from "../../Api/use_Genres";
import { useSelector } from "react-redux";
import "./home.css";
const Home = () => {
  useLatestManga();
  useGenres();
  return (
    <div className="home_con">
      <Carousel />
      <PopularToday />
      <LatestUpdates />
    </div>
  );
};

export default Home;

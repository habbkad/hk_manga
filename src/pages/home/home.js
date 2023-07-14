import React, { useEffect } from "react";
import Carousel from "../../components/carousel/carousel";
import LatestUpdates from "../../components/latest_updates/latest_updates";
import Navbar from "../../components/navbar/navbar";
import PopularToday from "../../components/popular_today/popular_today";
import { useLatestManga } from "../../Api/use_latest_manga";
import { useGenres } from "../../Api/use_Genres";
import { useSelector } from "react-redux";
import loading from "../../assets/loading.gif";
import "./home.css";
const Home = () => {
  const { loading } = useLatestManga();
  console.log(loading);
  useGenres();
  if (loading) {
    return <div className="loading"></div>;
  } else {
    return (
      <div className="home_con">
        <Carousel />
        <PopularToday />
        <LatestUpdates />
      </div>
    );
  }
};

export default Home;

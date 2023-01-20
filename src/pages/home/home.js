import React from "react";
import Carousel from "../../components/carousel/carousel";
import LatestUpdates from "../../components/latest_updates/latest_updates";
import Navbar from "../../components/navbar/navbar";
import PopularToday from "../../components/popular_today/popular_today";

const Home = () => {
  return (
    <div>
      <Carousel />
      <PopularToday />
      <LatestUpdates />
    </div>
  );
};

export default Home;

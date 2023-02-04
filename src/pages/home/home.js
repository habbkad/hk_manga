import React, { useEffect } from "react";
import Carousel from "../../components/carousel/carousel";
import LatestUpdates from "../../components/latest_updates/latest_updates";
import Navbar from "../../components/navbar/navbar";
import PopularToday from "../../components/popular_today/popular_today";
import { useLatestManga } from "../../Api/use_latest_manga";
import { useSelector } from "react-redux";
const Home = () => {
  const data = useSelector((state) => state);
  console.log(data);
  useLatestManga();
  return (
    <div>
      <Carousel />
      <PopularToday />
      <LatestUpdates />
    </div>
  );
};

export default Home;

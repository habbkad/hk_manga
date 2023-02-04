import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import Home from "../pages/home/home";
import MangaDetails from "../pages/manga_details/manga_details";
import ReadChapter from "../pages/read_chapter/read_chapter";
import Series from "../pages/series/series";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manga" element={<MangaDetails />} />
        <Route path="/series" element={<Series />} />
        <Route path="/chapter" element={<ReadChapter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

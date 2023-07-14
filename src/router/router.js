import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import Home from "../pages/home/home";
import MangaDetails from "../pages/manga_details/manga_details";
import ReadChapter from "../pages/read_chapter/read_chapter";
import Series from "../pages/series/series";
import Genres from "../pages/geners/geners";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manga/:id" element={<MangaDetails />} />

        <Route path="/series/:name" element={<Series />} />

        <Route path="/chapter/:title/:id" element={<ReadChapter />} />
        <Route path="/manga-genres" element={<Genres />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

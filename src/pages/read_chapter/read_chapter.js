import React, { useState, useEffect } from "react";
import ChapterImages from "../../components/chapter_images/chapter_images";
import { useChapterImages } from "../../Api/use_chapter_images";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";
const ReadChapter = () => {
  const location = useLocation();
  const { item } = location.state;
  useChapterImages(item.id);
  return (
    <div>
      <ChapterImages />
    </div>
  );
};

export default ReadChapter;

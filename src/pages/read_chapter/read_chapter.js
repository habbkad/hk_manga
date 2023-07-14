import React, { useState, useEffect } from "react";
import ChapterImages from "../../components/chapter_images/chapter_images";
import { useChapterImages } from "../../Api/use_chapter_images";
import { useLocation, useParams } from "react-router";
import { useSelector } from "react-redux";
const ReadChapter = () => {
  const location = useLocation();
  const { item, title, chapter } = location.state;
  const { id } = useParams();
  const [Id, setId] = useState(id);

  const { loading } = useChapterImages(Id);
  if (loading) {
    return <div className="loading"></div>;
  } else {
    return (
      <div className="rchap bg-darkCol">
        <ChapterImages title={title} id={id} chapter={chapter} />
      </div>
    );
  }
};

export default ReadChapter;

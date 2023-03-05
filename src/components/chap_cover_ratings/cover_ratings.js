import React, { useState } from "react";
import "./cover_ratings.css";

const CoverRatings = ({ data }) => {
  const [hover, setHover] = useState(false);
  return (
    <div className="cover_rating_con">
      <div
        className="image_cr_con"
        onMouseEnter={(e) => {
          setHover(true);
        }}
        onMouseLeave={(e) => {
          setHover(false);
        }}
      >
        <img class="image_cr" src={data.cover_art[2]} alt="image description" />
        <h3
          style={{
            alignSelf: "center",
            color: hover ? "rgba(255, 0, 0, 0.714)" : "white",
            height: 50,
            textAlign: "center",
            marginTop: 15,
          }}
          onMouseEnter={(e) => {
            setHover(true);
          }}
          onMouseLeave={(e) => {
            setHover(false);
          }}
        >
          {data.title}
        </h3>
      </div>
      <div className="rating_container">
        <div className="ratings">0.0 &#x2B50;</div>
        <div className="status">.ongoing</div>
      </div>
    </div>
  );
};

export default CoverRatings;

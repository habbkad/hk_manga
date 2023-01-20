import React, { useState } from "react";
import "./cover_ratings.css";

const CoverRatings = () => {
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
        <img
          class="image_cr"
          src="https://images.unsplash.com/photo-1674059391721-c4740162af2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="image description"
        />
        <h3
          style={{
            alignSelf: "center",
            color: hover ? "rgba(255, 0, 0, 0.714)" : "white",
            height: 50,
            marginTop: 15,
          }}
          onMouseEnter={(e) => {
            setHover(true);
          }}
          onMouseLeave={(e) => {
            setHover(false);
          }}
        >
          title
        </h3>
      </div>
      <div className="rating_container">
        <div className="ratings">khkdk</div>
        <div className="status">hvjjkg</div>
      </div>
    </div>
  );
};

export default CoverRatings;

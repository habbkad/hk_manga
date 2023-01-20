import React from "react";
import "./cover_title.css";

const CoverTitle = () => {
  return (
    <div>
      <div className="image_ct_con">
        <img
          class="image_ct"
          src="https://images.unsplash.com/photo-1674059391721-c4740162af2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="image description"
        />
        <h3
          style={{
            alignSelf: "center",
            color: "white",
            marginTop: 15,
            marginBottom: 10,
          }}
        >
          title
        </h3>
      </div>
    </div>
  );
};

export default CoverTitle;

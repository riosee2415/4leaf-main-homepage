import React from "react";
import "../styles/imgBox.css";

const ImgBox = ({ bgImg, text }) => {
  return (
    <div className="imageBox">
      <div className="imgBox__overview">{text}</div>
    </div>
  );
};

export default ImgBox;

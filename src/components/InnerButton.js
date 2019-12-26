import React from "react";
import "../styles/innerBtn.css";

const InnerButton = ({ imgUrl }) => {
  return (
    <div className="innerBtn">
      <img className="innerBtn__img" src={imgUrl} />
      <img className="innerBtn__img" src={imgUrl} />
      <img className="innerBtn__img" src={imgUrl} />
    </div>
  );
};
export default InnerButton;

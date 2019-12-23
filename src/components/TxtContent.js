import React from "react";
import "../styles/txtContent.css";

const TxtContent = ({ title, content }) => {
  return (
    <>
      <div className="txtBox">
        <div className="txtBox__title">{title}</div>
        <div className="txtBox__content">{content}</div>
      </div>
    </>
  );
};

export default TxtContent;

import React from "react";
import "../styles/textContent.css";

const TextContent = ({ ph }) => {
  return (
    <>
      <div className="requestContent">
        <textarea className="contentArea" placeholder={ph} />
      </div>
    </>
  );
};

export default TextContent;

import React from "react";
import "../styles/txtContent.css";

const TxtContent = ({ title = null, content = null, setNumber, index }) => {
  return (
    <>
      <div className="txtBox">
        <div className="txtBox__title" onClick={() => setNumber(index)}>
          {title}
        </div>
        {content ? <div className="txtBox__content">{content}</div> : null}
      </div>
    </>
  );
};

export default TxtContent;

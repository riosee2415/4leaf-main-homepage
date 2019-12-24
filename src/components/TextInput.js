import React from "react";
import "../styles/textInput.css";

const TextInput = ({ subject = null, ph = null }) => {
  return (
    <>
      <div className="inputBox">
        <div className="inputBox__text">
          <span>{subject}</span>
        </div>
        <div className="inputBox__input">
          <input
            className="inputBox__input-text"
            type="text"
            placeholder={ph}
          />
        </div>
      </div>
    </>
  );
};

export default TextInput;

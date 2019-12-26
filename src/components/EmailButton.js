import React from "react";
import "../styles/emailButton.css";

const EmailButton = ({ action }) => {
  return (
    <>
      <button className="eBtn" onClick={() => action}>
        Online Contact
      </button>
    </>
  );
};

export default EmailButton;

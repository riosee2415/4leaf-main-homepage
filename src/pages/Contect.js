import React from "react";
import TextInput from "../components/TextInput";
import TxtContent from "../components/TxtContent";
import "../styles/contect.css";

const Contect = () => {
  return (
    <div className="contectBox">
      <TxtContent content="test2" />
      <TextInput ph="Your Company / Name..." />
      <TextInput ph="Your Mobile..." />
      <TextInput ph="Your Email..." />
    </div>
  );
};

export default Contect;

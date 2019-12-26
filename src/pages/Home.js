import React from "react";
import "../styles/home.css";
import InnerButton from "../components/InnerButton";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img1 from "../assets/img/main01.jpg";

const Home = () => {
  return (
    <>
      <div className="homeBox">
        <FontAwesomeIcon icon={faLeaf} className="homeBox__leaf-icon" />
        <div className="homeBox__text">SPECIALTY SOFTWARE DEVELOP TEAM</div>
      </div>

      <InnerButton imgUrl={img1} />
    </>
  );
};

export default Home;

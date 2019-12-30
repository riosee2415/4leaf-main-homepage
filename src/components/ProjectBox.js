import React from "react";
import "../styles/project.css";
import home02 from "../assets/img/home02.jpg";

const ProjectBox = ({ title, content, img }) => {
  return (
    <>
      <div className="projects__box box">
        <img className="box__img" src={home02} width="200px" height="200px" />
        <div className="box__title">{title}</div>
      </div>

      <div className="projects__box2">
        <div className="box__content">{content}</div>
      </div>
    </>
  );
};

export default ProjectBox;

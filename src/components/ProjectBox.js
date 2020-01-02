import React, { useState } from "react";
import "../styles/project.css";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import home02 from "../assets/img/home02.jpg";

const ProjectBox = ({
  title,
  appName,
  content,
  content2,
  content3,
  content4
}) => {
  return (
    <>
      <div className="projects__box box">
        <img className="box__img" src={home02} width="200px" height="200px" />
        <div className="box__title">{appName}</div>
        <div className="box__title">{title}</div>
      </div>

      <div className="projects__box2">
        <div className="box__content">{content}</div>
        <div className="box__content">{content2}</div>
        <div className="box__content">{content3}</div>
        <div className="box__content">{content4}</div>
      </div>
    </>
  );
};

export default ProjectBox;

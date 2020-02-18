import React, { useState } from "react";
import "../styles/project.css";

const ProjectBox = ({
  pic,
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
        <img className="box__img" src={pic} width="240px" height="200px" />
        <div>
          <div className="box__title">{appName}</div>
          <div className="box__title2">{title}</div>
        </div>
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

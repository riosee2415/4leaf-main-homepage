import React from "react";
import ProjectBox from "../components/ProjectBox";
import "../styles/projectPage.css";
import home02 from "../assets/img/home02.jpg";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Project = () => {
  return (
    <>
      <div className="projects">
        <ProjectBox title="dummy" content="dummy" img={home02} />
      </div>

      <div className="project-nav">
        <FontAwesomeIcon icon={faAngleLeft} size="3x" />
        <FontAwesomeIcon icon={faAngleRight} size="3x" />
      </div>
    </>
  );
};
export default Project;

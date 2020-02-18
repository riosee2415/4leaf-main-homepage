import React, { useState } from "react";
import ProjectBox from "../components/ProjectBox";
import "../styles/projectPage.css";
import home02 from "../assets/img/home02.jpg";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { projectList } from "../lib/localData";

const Project = () => {
  const [page, setPage] = useState(0);
  return (
    <>
      <div className="projects">
        <ProjectBox
          pic={projectList[page].pic}
          title={projectList[page].projectName}
          content={projectList[page].desciprtion}
          content2={projectList[page].desciprtion2}
          content3={projectList[page].desciprtion3}
          content4={projectList[page].desciprtion4}
          appName={projectList[page].softwareName}
          img={home02}
        />
      </div>

      <div className="project-nav">
        <div
          className="project-nav__arrow"
          onClick={() => (page === 0 ? null : setPage(page - 1))}
        >
          <FontAwesomeIcon icon={faAngleLeft} size="3x" />
        </div>
        <div
          className="project-nav__arrow"
          onClick={() =>
            page === projectList.length - 1 ? null : setPage(page + 1)
          }
        >
          <FontAwesomeIcon icon={faAngleRight} size="3x" />
        </div>
      </div>
    </>
  );
};
export default Project;

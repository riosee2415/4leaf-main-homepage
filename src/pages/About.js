import React, { useState } from "react";
import ProfileBox from "../components/ProfileBox";
import "../styles/about.css";
import cooper from "../assets/img/cooper.png";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memberList } from "../lib/localData";

const About = () => {
  const [page, setPage] = useState(0);
  return (
    <div>
      <div className="devArea">
        <div className="devArea__title">DEVELOPER</div>
        <ProfileBox
          pic={memberList[page].pic}
          koreaName={memberList[page].koreaName}
          englishName={memberList[page].englishName}
          email={memberList[page].email}
          birth={memberList[page].birth}
          gender={memberList[page].gender}
          remarks={memberList[page].remarks}
          careerList={memberList[page].careerList}
        />

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
              page === memberList.length - 1 ? null : setPage(page + 1)
            }
          >
            <FontAwesomeIcon icon={faAngleRight} size="3x" />
          </div>
        </div>
      </div>

      <div className="cooperArea">
        <img src={cooper} />
      </div>
    </div>
  );
};

export default About;

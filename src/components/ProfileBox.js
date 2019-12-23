import React from "react";
import "../styles/profileBox.css";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProfileBox = () => {
  return (
    <>
      <div className="profile-box pro">
        <div className="backArrow">
          <FontAwesomeIcon icon={faAngleLeft} size="3x" />
        </div>
        <div className="pro__col1">11</div>
        <div className="pro__col2">22</div>
        <div className="backArrow">
          {" "}
          <FontAwesomeIcon icon={faAngleRight} size="3x" />
        </div>
      </div>
    </>
  );
};

export default ProfileBox;

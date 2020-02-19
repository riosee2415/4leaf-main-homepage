import React from "react";
import "../styles/profileBox.css";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProfileBox = ({
  pic,
  koreaName,
  englishName,
  email,
  birth,
  gender,
  remarks,
  careerList
}) => {
  return (
    <>
      <div className="profile__box box3">
        <img className="box__img" src={pic} width="240px" height="240px" />
        <div className="box_info_frame">
          <div className="box__info">{koreaName}</div>
          <div className="box__info">{englishName}</div>
          <div className="box__info">{email}</div>
          <div className="box__info">{birth}</div>
          <div className="box__info">{gender}</div>
          <div className="box__info">{remarks}</div>
        </div>
      </div>

      {/* <div className="profile__box2">
        {careerList.map(career => {
          return <div className="box__content">{career}</div>;
        })}
      </div> */}
    </>
  );
};

export default ProfileBox;

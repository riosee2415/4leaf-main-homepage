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
      <div className="profile__box box">
        <img className="box__img" src={pic} width="240px" height="200px" />
        <div>
          <div className="box__info1">{koreaName}</div>
          <div className="box__info2">{englishName}</div>
          <div className="box__info3">{email}</div>
          <div className="box__info4">{birth}</div>
          <div className="box__info5">{gender}</div>
          <div className="box__info6">{remarks}</div>
        </div>
      </div>

      <div className="profile__box2">
        {careerList.map(career => {
          return <div className="box__content">{career}</div>;
        })}
      </div>
    </>
  );
};

export default ProfileBox;

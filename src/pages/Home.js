import React from "react";
import "../styles/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import home02 from "../assets/img/home02.jpg";
import home03 from "../assets/img/home03.jpg";

const Home = () => {
  return (
    <>
      <div className="homeBox">
        <FontAwesomeIcon icon={faLeaf} className="homeBox__leaf-icon" />
        <div className="homeBox__text">SPECIALTY SOFTWARE DEVELOP TEAM</div>
      </div>

      <div className="homeBox2">
        <div className="homeBox2__box">
          <span>전문가들로 이루어진 개발팀 4LEAF 입니다.</span>
        </div>

        <div className="homeBox2__box">
          <span>
            다양한 분야의 전문가들로 구성되어 소프트웨어의 완성도 및 사용성이
            우수합니다.
          </span>
        </div>

        <div className="homeBox2__box">
          <span>
            최소한의 금액으로 최대의 결과물을 약속하는 개발팀 4LEAF 입니다.
          </span>
        </div>

        <div className="homeBox2__box">
          <span>소프트웨어 개발 및 개발교육을 함께 합니다.</span>
        </div>
      </div>

      <div className="homeSubject">
        <div className="homeSubject__left">
          <span>안드로이드 | IOS 앱 개발</span>
          <span>검증 된 프레임워크 사용</span>
          <span>4LEAF의 특별한 유지보수</span>
          <span>양산형 앱이 아닌 하이퀄리티 앱 제공</span>
        </div>
        <div className="homeSubject__right">
          <img src={home02} width="270px" height="210px" />
        </div>
      </div>

      <div className="homeSubject">
        <div className="homeSubject__right">
          <img src={home03} width="270px" height="210px" />
        </div>
        <div className="homeSubject__left">
          <span>반응형 웹사이트 | 웹앱 개발</span>
          <span>고품격 관리자페이지 제공</span>
          <span>전문 웹 퍼블리셔를 통한 UX UI</span>
          <span>그룹웨어, ERP 등 솔루션 개발</span>
        </div>
      </div>
    </>
  );
};

export default Home;

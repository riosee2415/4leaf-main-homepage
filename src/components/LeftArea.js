import React from "react";
import "../styles/left.css";
import logo from "../assets/logo/4leaflogo-dark.png";
import TxtContent from "../components/TxtContent";

const LeftArea = () => {
  const txtData = [
    {
      title: "WEB SITE",
      content: "반응형 | 다양한 기업, 일반 홈페이지 | 쇼핑몰"
    },
    {
      title: "MOBILE APPLICATION",
      content:
        "ANDROID / IOS를 동시에 개발 가능한 기술력을 보유하고 있습니다. 공통 플렛폼에 내용만 변경하여 제작하는 기술이 아닌 4LEAF만의 자체적인 프레임워크와 기술력을 기반으로 개발 후 유지보수까지 직접 제공합니다."
    },
    {
      title: "DEVELOPER",
      content:
        "제한된 프로그래밍만 해온 개발자가 아닌, 풍부한 경험과 검증된 개발경험으로 프로페셔널한 개발자들로 구성되어 프로젝트를 완성시켜 나아갑니다. 4LEAF의 개발자는 여러분이 원하는 것들에 대해 충분히 만족시킬 준비가 되어있으며, 개발자로서 자긍심을 보유하고 있습니다."
    },
    {
      title: "COMMUNICATION",
      content:
        "고객과 풍부한 소통, 끈근한 연결을 통하여 생산성 증가와 더 나은 결과물을 창출하는 것에 초점을 두고 있습니다. 4LEAF과 함께하는 여러분들에게 답답함은 제공하지 않습니다."
    }
  ];

  return (
    <>
      <div className="box">
        <div className="box__top">
          <div className="logoArea">
            <img className="box__top__logo" src={logo} alt="4LEAF LOGO" />
          </div>
        </div>

        <div className="box__center">
          {txtData.map((data, index) => (
            <TxtContent key={index} title={data.title} />
          ))}
        </div>
      </div>
    </>
  );
};

export default LeftArea;

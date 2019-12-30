import React from "react";
import TextInput from "../components/TextInput";
import TxtContent from "../components/TxtContent";
import TextContent from "../components/TextContent";
import "../styles/contect.css";

const Contect = () => {
  return (
    <div className="contectBox">
      <TxtContent content="📕 편리하게 문의내용을 작성하여 메일을 전송하세요." />
      <TxtContent content="📕 웹사이트 | 웹앱 | 모바일 어플리케이션 | 유지보수 | 협업요청 | 견적요청 | 개발교육 등" />
      <form action="/Contect">
        <TextInput ph="Your Company / Name..." />
        <TextInput ph="Your Mobile..." />
        <TextInput ph="Your Email..." type="email" />
        <TextContent ph="Write Your Request" />

        <input className="submitBtn" type="submit" value="문의내용 전송하기" />
      </form>
    </div>
  );
};

export default Contect;

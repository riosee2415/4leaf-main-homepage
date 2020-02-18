import React from "react";
import TextInput from "../components/TextInput";
import TxtContent from "../components/TxtContent";
import TextContent from "../components/TextContent";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import "../styles/contect.css";
import "../styles/textContent.css";

const Contect = () => {
  return (
    <div className="contectBox">
      <TxtContent content="📕 편리하게 문의내용을 작성하여 메일을 전송하세요." />
      <TxtContent content="📕 웹사이트 | 웹앱 | 모바일 어플리케이션 | 유지보수 | 협업요청 | 견적요청 | 개발교육 등" />

      <form action="/Contact" id="frm1"></form>

      <div className="inputBox">
        <div className="inputBox__text">
          <span></span>
        </div>
        <div className="inputBox__input">
          <input
            id="company-js"
            className="inputBox__input-text"
            type="text"
            placeholder="Your Company / Name..."
          />
        </div>
      </div>

      <div className="inputBox">
        <div className="inputBox__text">
          <span></span>
        </div>
        <div className="inputBox__input">
          <input
            id="mobile-js"
            className="inputBox__input-text"
            type="text"
            placeholder="Your Mobile..."
          />
        </div>
      </div>

      <div className="inputBox">
        <div className="inputBox__text">
          <span></span>
        </div>
        <div className="inputBox__input">
          <input
            id="email-js"
            className="inputBox__input-text"
            type="text"
            placeholder="Your Email..."
          />
        </div>
      </div>

      <div className="requestContent">
        <textarea
          id="content-js"
          className="contentArea"
          placeholder="Write Your Request"
        />
      </div>

      <input
        className="submitBtn"
        type="button"
        value="문의내용 전송하기"
        onClick={_sendHandler}
      />
    </div>
  );
};

const _sendHandler = () => {
  const company = document.getElementById("company-js");
  const mobile = document.getElementById("mobile-js");
  const email = document.getElementById("email-js");
  const content = document.getElementById("content-js");

  confirmAlert({
    title: "",
    message: "담당자에게 문의내용을 전송하시겠습니까?",
    buttons: [
      {
        label: "Yes",
        onClick: () =>
          validation(company.value, mobile.value, email.value, content.value)
            ? sendMail()
            : alert(
                "[실패] 회사명(또는 이름), 핸드폰번호, 이메일주소, 내용 모두 입력해주세요."
              )
      },
      {
        label: "No",
        onClick: () => null
      }
    ]
  });
};

const validation = (company, mobile, email, content) => {
  if (
    company.length < 1 ||
    mobile.length < 1 ||
    email.length < 1 ||
    content.length < 1
  ) {
    return false;
  }

  return true;
};

const sendMail = (company, mobile, email, content) => {
  alert("[전송 성공] 감사합니다. 빠른 시일 내에 연락드리겠습니다.");

  const frm1 = document.getElementById("frm1");
  frm1.submit();
};

export default Contect;

import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "shared/App";
import Menu from "components/Menu";
import LeftArea from "../components/LeftArea";
import "../styles/styles.css";

const Root = () => {
  return (
    <div className="publicArea">
      <div className="publicArea__col1">
        <LeftArea />
      </div>
      <div className="publicArea__col2">
        <BrowserRouter>
          <Menu />
          <App />
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Root;

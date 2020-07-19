import React from "react";

import ShowBox from "../../components/ShowBox/ShowBox";
import CssController from "../../components/CssController/CssController";
import "./MainPage.css";
const MainPage = (props) => {
  return (
    <div className="main-page">
      <div className="left-container">
        <CssController />
      </div>
      <div className="right-container">
        <ShowBox />
      </div>
    </div>
  );
};

export default MainPage;

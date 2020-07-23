import React from "react";

import ShowBox from "../../components/ShowBox/ShowBox";
import FlexParentContainer from "../../components/CssController/FlexParentContainer/FlexParentContainer";
import "./MainPage.css";
const MainPage = (props) => {
  return (
    <div className="main-page">
      <div className="left-container">
        <FlexParentContainer />
      </div>
      <div className="right-container">
        <ShowBox />
      </div>
    </div>
  );
};

export default MainPage;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFlexDirection } from "../../components/ShowBox/showBoxSlice";
import "./CssController.scss";
const CssController = () => {
  const [flexDir, setFlexDir] = useState("row");
  const dispatch = useDispatch();
  return (
    <div className="css-controller">
      <h3 className="css-description">flex-direction</h3>
      <div className="css-control-pad">
        <div
          active="true"
          className={`css-option ${flexDir === "row" ? "active" : ""}`}
          onClick={() => {
            setFlexDir("row");
            dispatch(setFlexDirection("row"));
          }}
        >
          row
        </div>
        <div
          className={`css-option ${flexDir === "row-rev" ? "active" : ""}`}
          onClick={() => {
            setFlexDir("row-rev");
            dispatch(setFlexDirection("row-rev"));
          }}
        >
          row-reverse
        </div>
        <div
          className={`css-option ${flexDir === "col" ? "active" : ""}`}
          onClick={() => {
            setFlexDir("col");
            dispatch(setFlexDirection("col"));
          }}
        >
          col
        </div>
        <div
          className={`css-option ${flexDir === "col-rev" ? "active" : ""}`}
          onClick={() => {
            setFlexDir("col-rev");
            dispatch(setFlexDirection("col-rev"));
          }}
        >
          col-reverse
        </div>
      </div>
    </div>
  );
};

export default CssController;

import React from "react";
import { useSelector } from "react-redux";
import { selectStyle } from "./showBoxSlice";
import "./ShowBox.css";
const ShowBox = (props) => {
  const extraStyle = useSelector(selectStyle);

  return (
    <div className={`show-box ${extraStyle}`}>
      <div className="show-box-item">1</div>
      <div className="show-box-item">2</div>
      <div className="show-box-item">3</div>
    </div>
  );
};

export default ShowBox;

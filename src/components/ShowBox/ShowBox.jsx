import React from "react";
import { useSelector } from "react-redux";
import { selectParentStyle } from "./showBoxSlice";
import "./ShowBox.css";
const ShowBox = (props) => {
  const parentStyle = useSelector(selectParentStyle);
  const arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(i);
  }
  return (
    <div className={`show-box`} style={parentStyle}>
      {arr.map((i) => {
        return <div className="show-box-item">{i}</div>;
      })}
    </div>
  );
};

export default ShowBox;

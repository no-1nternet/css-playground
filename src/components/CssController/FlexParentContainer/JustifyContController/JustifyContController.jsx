import React from "react";
import CssController from "../../CssController";
import { setJustifyContent } from "../../../ShowBox/showBoxSlice";

const JustifyContController = () => {
  const title = "justify-content";
  const options = [
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
  ];
  return (
    <div>
      <CssController
        cssTitle={title}
        cssOptions={options}
        setOption={setJustifyContent}
      />
    </div>
  );
};

export default JustifyContController;

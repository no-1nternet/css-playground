import React from "react";
import CssController from "../../CssController";
import { setAlignContent } from "../../../ShowBox/showBoxSlice";

const AlignContController = () => {
  const title = "align-content";
  const options = [
    "flex-start",
    "flex-end",
    "center",
    "stretch",
    "space-between",
    "space-around",
  ];
  return (
    <div>
      <CssController
        cssTitle={title}
        cssOptions={options}
        setOption={setAlignContent}
      />
    </div>
  );
};

export default AlignContController;

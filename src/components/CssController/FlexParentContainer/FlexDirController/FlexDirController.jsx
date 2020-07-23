import React from "react";
import CssController from "../../CssController";
import { setFlexDirection } from "../../../ShowBox/showBoxSlice";

const FlexDirController = () => {
  const title = "flex-direction";
  const options = ["row", "row-reverse", "column", "column-reverse"];
  return (
    <div>
      <CssController
        cssTitle={title}
        cssOptions={options}
        setOption={setFlexDirection}
      />
    </div>
  );
};

export default FlexDirController;

import React from "react";
import CssController from "../../CssController";
import { setAlignItems } from "../../../ShowBox/showBoxSlice";

const AlignItemsController = () => {
  const title = "align-items";
  const options = ["flex-start", "flex-end", "center", "stretch", "baseline"];
  return (
    <div>
      <CssController
        cssTitle={title}
        cssOptions={options}
        setOption={setAlignItems}
      />
    </div>
  );
};

export default AlignItemsController;

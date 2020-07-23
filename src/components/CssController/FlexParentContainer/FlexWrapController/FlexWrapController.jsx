import React from "react";
import CssController from "../../CssController";
import { setFlexWrap } from "../../../ShowBox/showBoxSlice";

const FlexWrapController = () => {
  const title = "flex-wrap";
  const options = ["nowrap", "wrap", "wrap-reverse"];
  return (
    <div>
      <CssController
        cssTitle={title}
        cssOptions={options}
        setOption={setFlexWrap}
      />
    </div>
  );
};

export default FlexWrapController;

import React from "react";
import FlexDirController from "./FlexDirController/FlexDirController";
import FlexWrapController from "./FlexWrapController/FlexWrapController";
import JustifyContController from "./JustifyContController/JustifyContController";
import AlignItemsController from "./AlignItemsController/AlignItemsController";
import AlignContController from "./AlignContController/AlignContController";

const FlexParentContainer = () => (
  <div>
    <FlexDirController />
    <FlexWrapController />
    <JustifyContController />
    <AlignItemsController />
    <AlignContController />
  </div>
);

export default FlexParentContainer;

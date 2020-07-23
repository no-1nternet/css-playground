import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./CssController.scss";

const CssController = (props) => {
  const { cssTitle, cssOptions, setOption } = props;
  const [currOpt, setCurrOpt] = useState(cssOptions[0]);

  const dispatch = useDispatch();
  return (
    <div className="css-controller">
      <h3 className="css-description">{cssTitle}</h3>
      <div className="css-control-pad">
        {cssOptions.map((option, index) => {
          return (
            <div
              key={index}
              className={`css-option ${currOpt === option ? "active" : ""}`}
              onClick={() => {
                setCurrOpt(option);
                dispatch(setOption(option));
              }}
            >
              {option}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CssController;

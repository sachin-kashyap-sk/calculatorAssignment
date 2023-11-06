import React, { useState } from "react";
import Buttons from "./Buttons";
import classes from "../stylesContainer/calculator/calculator.module.css";
const Calculator = () => {
  const [btnVal, setBtnVal] = useState("");

  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>
        <div>
          <input
            value={btnVal}
            onChange={(e) => {
              setBtnVal(e.target.value);
            }}
            className={classes.input}
          />
        </div>
        <div>
          <Buttons btnVal={btnVal} setBtnVal={setBtnVal} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;

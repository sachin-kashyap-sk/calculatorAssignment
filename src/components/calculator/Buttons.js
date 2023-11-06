import React from "react";
import classes from "../stylesContainer/buttonsStyles/buttons.module.css";
const Buttons = ({ btnVal, setBtnVal }) => {
  const handleClick = (e) => {
    setBtnVal(btnVal.concat(e.target.name));
  };

  const clear = () => {
    setBtnVal("");
  };

  const backspace = () => {
    setBtnVal(btnVal.slice(0, -1));
  };

  const calcResult = () => {
    try {
      // eslint-disable-next-line no-eval
      setBtnVal(eval(btnVal).toString());
    } catch (err) {
      setBtnVal("Error");
    }
  };

  return (
    <div>
      <div className={classes.btnContainer}>
        <button className={classes.clear} onClick={clear}>
          Clear
        </button>

        <button className={classes.btn} onClick={backspace}>
          C
        </button>
        <button className={classes.btn} name="/" onClick={handleClick}>
          &divide;
        </button>
      </div>
      <div className={classes.btnContainer}>
        <button className={classes.digit} name="7" onClick={handleClick}>
          7
        </button>
        <button className={classes.digit} name="8" onClick={handleClick}>
          8
        </button>
        <button className={classes.digit} name="9" onClick={handleClick}>
          9
        </button>
        <button className={classes.btn} name="*" onClick={handleClick}>
          &times;
        </button>
      </div>
      <div className={classes.btnContainer}>
        <button className={classes.digit} name="4" onClick={handleClick}>
          4
        </button>
        <button className={classes.digit} name="5" onClick={handleClick}>
          5
        </button>
        <button className={classes.digit} name="6" onClick={handleClick}>
          6
        </button>
        <button className={classes.btn} name="-" onClick={handleClick}>
          &minus;
        </button>
      </div>

      <div className={classes.btnContainer}>
        <button className={classes.digit} name="1" onClick={handleClick}>
          1
        </button>
        <button className={classes.digit} name="2" onClick={handleClick}>
          2
        </button>
        <button className={classes.digit} name="3" onClick={handleClick}>
          3
        </button>
        <button className={classes.btn} name="+" onClick={handleClick}>
          +
        </button>
      </div>
      <div className={classes.btnContainer}>
        <button className={classes.digit} name="0" onClick={handleClick}>
          0
        </button>
        <button className={classes.digit} name="." onClick={handleClick}>
          .
        </button>
        <button className={classes.equal} onClick={calcResult}>
          =
        </button>
      </div>
    </div>
  );
};

export default Buttons;

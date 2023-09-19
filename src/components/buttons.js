import React from "react";
import "../styles/button.css";

const Buttons = ({ inputHandler, allclear, backspace, plusOrMinus, equalTo }) => {

  // created all buttons and assigned respective functions to it
  return (
    <div className="show-btn">

      <button className="btn clr" onClick={allclear}>
        AC
      </button>
      <button className="btn clr" onClick={backspace}>
        ⌫
      </button>
      <button className="btn exp" onClick={inputHandler}>
        %
      </button>
      <button className="btn exp" onClick={inputHandler}>
        ÷
      </button>
      
      <button className="btn" onClick={inputHandler}>
        7
      </button>
      <button className="btn" onClick={inputHandler}>
        8
      </button>
      <button className="btn" onClick={inputHandler}>
        9
      </button>
      <button className="btn exp" onClick={inputHandler}>
        x
      </button>
      <button className="btn" onClick={inputHandler}>
        4
      </button>
      <button className="btn" onClick={inputHandler}>
        5
      </button>
      <button className="btn" onClick={inputHandler}>
        6
      </button>
      <button className="btn exp" onClick={inputHandler}>
        -
      </button>
      <button className="btn" onClick={inputHandler}>
        1
      </button>
      <button className="btn" onClick={inputHandler}>
        2
      </button>
      <button className="btn" onClick={inputHandler}>
        3
      </button>
      <button className="btn exp" onClick={inputHandler}>
        +
      </button>
      <button className="btn exp" onClick={plusOrMinus}>
        ±
      </button>
      <button className="btn" onClick={inputHandler}>
        0
      </button>
      <button className="btn exp" onClick={inputHandler}>
        .
      </button>
      <button className="btn exp equal" onClick={equalTo}>
        =
      </button>
    </div>
  );
};

export default Buttons;

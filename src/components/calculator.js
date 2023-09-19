import React, { useState } from "react";
import Display from "./display";
import Buttons from "./buttons";
import "../styles/calc.css";
import { evaluate, round } from "mathjs"; // getting evaluate and round functions from mathjs package

function Calculator() {
  const [input, setInput] = useState(""); // we're using useState Hook
  const [answer, setAnswer] = useState("");

  //inputHandler
  const inputHandler = (event) => {
    let val = event.target.innerText;

    let str = input + val;
    if (str.length > 14) return; // no.of digits should not be greater than 14

    if (answer !== "") {
      setInput(answer + val);
      setAnswer("");
    } else {
        setInput(str);
    }
  };

  //Clear display
  const allclear = () => {
    setInput("");
    setAnswer("");
  };

  // calculate final answer
  const equalTo = () => {
    if (input === "") return;
    let result = 0;
    let final = input;
    
    final = final.replaceAll("x", "*");
    final = final.replaceAll("÷", "/");

    try {
      result = evaluate(final);
    } catch (error) {
      result = error.message === "Invalid";
    }
    isNaN(result) ? setAnswer(result) : setAnswer(round(result, 3));
  }

  // remove last character
  const backspace = () => {
    if (answer !== "") {
      setInput(answer.toString().slice(0, -1));
      setAnswer("");
    } else setInput((prev) => prev.slice(0, -1));
  };

  // change plus to minus and vice-verse
  const plusOrMinus = () => {
    if (answer === "Invalid") return;
    else if (answer !== "") {
      let ans = answer.toString();
      if (ans.charAt(0) === "-") {
        let plus = "+";
        setInput(plus.concat(ans.slice(1, ans.length)));
      } else if (ans.charAt(0) === "+") {
        let minus = "-";
        setInput(minus.concat(ans.slice(1, ans.length)));
      } else {
        let minus = "-";
        setInput(minus.concat(ans));
      }
      setAnswer("");
    } else {
      if (input.charAt(0) === "-") {
        let plus = "+";
        setInput((prev) => plus.concat(prev.slice(1, prev.length)));
      } else if (input.charAt(0) === "+") {
        let minus = "-";
        setInput((prev) => minus.concat(prev.slice(1, prev.length)));
      } else {
        let minus = "-";
        setInput((prev) => minus.concat(prev));
      }
    }
  };
 
  // we're passing props along with Display and Buttons
  return (
    <>
      <div className="container">
        <div className="main">
          <Display input={input} setInput={setInput} answer={answer} />
          <Buttons
            inputHandler={inputHandler}
            allclear={allclear}
            backspace={backspace}
            plusOrMinus={plusOrMinus}
            equalTo={equalTo}
          />
        </div>
      </div>
    </>
  );
}

export default Calculator;

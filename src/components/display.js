import React from "react";
import "../styles/display.css";

const Display = ({ input, setInput, answer }) => {
  const onChangeTagInput = (e) => {

    if (e.target.value === "") {
      setInput(e.target.value);
    }
  };

  // Before evaluation there'll be single input tag, after evaluation there'll be two input tags with question and answer
  return (
    <>
      <div className="display">
        {answer === "" ? (
          <>
            <input
              type="text"
              name="input"
              className="input"
              style={{ padding: "29px" }}
              value={input}
              placeholder="0"
              maxLength={12}
              // disabled
              onChange={onChangeTagInput}
              autoComplete="off"
            />
          </>
        ) : (
          <>
            <input
              type="text"
              name="input"
              className="value"
              value={input}
              placeholder="0"
              maxLength={12}
              disabled
            />
            <input
              type="text"
              name="value"
              className="input"
              value={answer}
              disabled
            />
          </>
        )}
      </div>
    </>
  );
};

export default Display;

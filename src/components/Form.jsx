import React, { useEffect, useState } from "react";
import { convertString } from "../utils";
import PropTypes from "prop-types";

export default function Form(props) {
  const { setRequestTitle } = props;

  const [inputValue, setInputValue] = useState("");
  const [optionValue, setOptionValue] = useState("all movies");

  let count = 0;

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    console.log("setvalue:", optionValue);
  }, [optionValue]);

  const onSubmit = (e) => {
    count++;
    e.preventDefault();
    setRequestTitle(convertString(inputValue));
    setInputValue("");
  };

  return (
    <form className="inputContainer">
      <p>Please input a movie, tv show, or videogame</p>
      <div>
        <input
          value={inputValue}
          type="text"
          className="movieInput"
          onChange={handleInputChange}
          autoFocus
        />
      </div>
      <button type="submit" onClick={onSubmit}>
        Submit <br />
        (press enter)
      </button>
    </form>
  );
}

Form.propTypes = {
  setRequestTitle: PropTypes.func,
};

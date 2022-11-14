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

  const handleOptionChange = (e) => {
    console.log(e);
    console.log("passed value:", e.target.value);
    setOptionValue(e.target.value);
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
      <p>Please input a movie</p>
      <div>
        <input
          value={inputValue}
          type="text"
          className="movieInput"
          onChange={handleInputChange}
          autoFocus
        />
        <select onChange={handleOptionChange} value={optionValue}>
          <option
            defaultValue="all movies"
            key="all movies"
            value={"all movies"}
          >
            All Movies
          </option>
          <option key="one movie" value={"one movie"}>
            One Movie
          </option>
        </select>
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

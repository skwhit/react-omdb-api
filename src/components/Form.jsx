import React, { useEffect, useState } from "react";
import { convertString } from "../utils";
import PropTypes from "prop-types";
import "./form.css"

export default function Form(props) {
  const { setSearchTerm } = props;

  const [inputValue, setInputValue] = useState("");

  let count = 0;

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    count++;
    e.preventDefault();
    setSearchTerm(convertString(inputValue));
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
  setSearchTerm: PropTypes.func,
};

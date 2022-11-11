import React from "react";

export default function Form(props) {
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
        <select onChange={handleOptionChange} defaultValue={optionValue}>
          <option value="1">All Movies</option>
          <option value="2">One Movie</option>
        </select>
      </div>
      <button type="submit" onClick={onSubmit}>
        Submit <br />
        (press enter)
      </button>
    </form>
  );
}

import React from "react";
import "./index.css";

const PopUp = ({ showPopUp, fileName }) => {
  const handleClick = (e) => {
    console.log(e.target.textContent, fileName);
  };
  return (
    <div
      className="main_wrapper"
      style={{ display: showPopUp ? "unset" : "none" }}
    >
      <p onClick={handleClick} className="button">
        COPY
      </p>
      <p onClick={handleClick} className="button">
        DELETE
      </p>
      <p onClick={handleClick} className="button">
        RENAME
      </p>
    </div>
  );
};

export default PopUp;

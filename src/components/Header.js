import React, { useState } from "react";

const Header = ({ handleToggleDarkMode }) => {
  const [text, setText] = useState("Light");

  const handleClick = () => {
    setText(text === "Light" ? "Dark" : "Light");
  };

  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        onClick={() => {
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode);
          handleClick();
        }}
        className={`toggle ${
          text === "Light" ? "uil uil-sun logo" : "uil uil-moon logo"
        }`}
      ></button>
    </div>
  );
};

export default Header;

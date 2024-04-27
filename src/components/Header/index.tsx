import React from "react";
import "./index.css";

export const Header: React.FC = () => {
  return (
    <header className="App-header">
      <div className="App-logo">Logo</div>
      <div className="buttons-group">
        <button>SUNGLASSES</button>
        <button>EYEGLASSES</button>
        <button>LENSES</button>
      </div>
      <div className="search">
        <input placeholder="Search"></input>
        <button>RESET</button>
      </div>
    </header>
  );
};

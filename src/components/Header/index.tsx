import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <header className="App-header">
      <div className="App-logo">Logo</div>
      <div className="buttons-group">
        <Link to="/sunglasses">SUNGLASSES</Link>
        <Link to="/eyeglasses">EYEGLASSES</Link>
        <Link to="/lenses">LENSES</Link>
      </div>
      <div className="search">
        <input placeholder="Search"></input>
        <button>RESET</button>
      </div>
    </header>
  );
};

import * as React from "react";
import { Link } from "react-router-dom";

import "./index.css";

type Selected = "sunglasses" | "eyeglasses" | "lenses";

export const Header: React.FC = () => {
  const [selected, setSelected] = React.useState<Selected>("sunglasses");
  return (
    <header className="App-header">
      <div className="App-logo">Logo</div>
      <div className="Buttons-group">
        <Link
          className={`Link${selected === "sunglasses" ? " active" : ""}`}
          to="/sunglasses"
          onClick={() => setSelected("sunglasses")}
        >
          SUNGLASSES
        </Link>
        <Link
          className={`Link${selected === "eyeglasses" ? " active" : ""}`}
          to="/eyeglasses"
          onClick={() => setSelected("eyeglasses")}
        >
          EYEGLASSES
        </Link>
        <Link
          className={`Link${selected === "lenses" ? " active" : ""}`}
          to="/lenses"
          onClick={() => setSelected("lenses")}
        >
          LENSES
        </Link>
      </div>
      <div className="Search">
        <input placeholder="Search"></input>
        <button>RESET</button>
      </div>
    </header>
  );
};

import * as React from "react";

import "./index.css";

export type TitleProps = {
  title: string;
};

export const Title: React.FC<TitleProps> = ({ title }) => (
  <div className="Title">
    <h1 className="Title-content">{title}</h1>
  </div>
);

import * as React from "react";
import "./index.css";

export interface CardProps {
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return <div className="Card">{children}</div>;
};

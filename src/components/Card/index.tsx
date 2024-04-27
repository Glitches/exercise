import React, { ReactNode } from "react";
import "./index.css";

export interface CardProps {
  children?: ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return <div className="Card">{children}</div>;
};

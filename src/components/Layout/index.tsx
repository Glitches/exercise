import React, { ReactNode } from "react";
import "./index.css";

export interface LayoutProps {
  children?: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className="Layout">{children}</div>;
};

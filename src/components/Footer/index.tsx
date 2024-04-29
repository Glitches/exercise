import * as React from "react";

import "./index.css";

export interface FooterProps {
  children?: React.ReactNode;
}

export const Footer: React.FC<FooterProps> = ({ children }) => {
  const [isSticky, setIsSticky] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const footerHeight = document.querySelector("footer")?.offsetHeight ?? 0;
      const scrollTop = window.scrollY;

      if (scrollTop + windowHeight >= documentHeight - footerHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className={`Footer ${isSticky ? "sticky" : ""}`}>
      <div className="Footer-content">{children}</div>
    </footer>
  );
};

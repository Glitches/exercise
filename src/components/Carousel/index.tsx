import * as React from "react";
import "./index.css";

export type CarouselProps = {
  items: { src: string }[];
};

export const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [activeImage, setActiveImage] = React.useState(0);

  const nextImage = () => {
    setActiveImage((prevActiveImage) => (prevActiveImage + 1) % items.length);
  };

  const prevImage = () => {
    setActiveImage(
      (prevActiveImage) => (prevActiveImage - 1 + items.length) % items.length
    );
  };

  return (
    <div className="carousel">
      <div className="carousel-inner"></div>
      <button className="carousel-button prev" onClick={prevImage}>
        &#9668;
      </button>
      {items.map((image, index) => (
        <div
          key={index}
          className={`carousel-item ${index === activeImage ? "active" : ""}`}
        >
          <div>{image.src}</div>
        </div>
      ))}
      <button className="carousel-button next" onClick={nextImage}>
        &#9658;
      </button>
    </div>
  );
};

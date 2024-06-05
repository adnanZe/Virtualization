import React, { useState } from "react";
import "./Presentation.css";
import { WithoutVirtualizationDemo } from "./components/WithoutVirtualizationDemo";
import { VirtualizationDemo } from "./components/VirtualizationDemo";
const slides = [
  {
    title: "Virtualization",
  },
  {
    title: "Benefits of Virtualization",
    content: (
      <ul>
        <li>Performance Optimization</li>
        <li>Memory Efficiency</li>
        <li>Improved User Experience</li>
      </ul>
    ),
  },
  {
    title: "Use Cases",
    content: (
      <ul>
        <li>Large Data Sets</li>
        <li>Infinite Scrolling</li>
        <li>Real-time Data Updates</li>
      </ul>
    ),
  },
  {
    title: "Demo Without Virtualization",
    content: <WithoutVirtualizationDemo />,
  },
  {
    title: "Demo With Virtualization",
    content: <VirtualizationDemo />,
  },
];
export const Presentation: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [contentVisible, setContentVisible] = useState(false);
  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
      setContentVisible(false);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      setContentVisible(false);
    }
  };

  return (
    <div>
      <div
        key={currentSlide}
        className="slide animate-slide"
        onClick={() => !contentVisible && setContentVisible(!contentVisible)}>
        <h1>{slides[currentSlide].title}</h1>
        {contentVisible && (
          <div className="animate-slide">{slides[currentSlide].content}</div>
        )}
      </div>
      <div className="navigation">
        <button
          className="button"
          onClick={prevSlide}
          disabled={currentSlide === 0}>
          Previous
        </button>
        <button
          className="button"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

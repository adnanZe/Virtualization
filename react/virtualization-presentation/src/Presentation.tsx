import React, { useState } from "react";
import "./Presentation.css";
import { WithoutVirtualizationDemo } from "./components/WithoutVirtualizationDemo";
import { VirtualizationDemo } from "./components/VirtualizationDemo";

export const Presentation: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
      title: "Demo Virtualization",
      content: <VirtualizationDemo />,
    },
    {
      title: "Virtualization main core",
      content: (
        <pre>
          <code>
            {`
const scrollContainer = scrollContainerRef.current;
const totalItems = 1000;
const itemHeight = 50;
const buffer = 5;

const renderVisibleItems = () => {
  if (!scrollContainer) return;
  const scrollTop = scrollContainer.scrollTop;
  const containerHeight = scrollContainer.clientHeight;

  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - buffer);
  const endIndex = Math.min(totalItems - 1, Math.ceil((scrollTop + containerHeight) / itemHeight) + buffer);

  setVisibleItems(startIndex, endIndex);
};

scrollContainer.addEventListener('scroll', renderVisibleItems);
`}
          </code>
        </pre>
      ),
    },
    {
      title: "JSX Element",
      content: (
        <pre>
          <code>
            {`
return (
  <div
    ref={scrollContainerRef}
    style={{ height: "200px", overflowY: "auto", border: "1px solid #ccc" }}>
    <div
      style={{height: \`\${totalItems * itemHeight}px\`, position: "relative" }}>
      {visibleItems.map((index) => (
        <div
          key={index}
          style={{
            height: \`\${itemHeight}px\`,
            borderBottom: "1px solid #ccc",
            position: "absolute",
            top: \`\${index * itemHeight}px\`,
            width: "100%",
          }}>
          Item {index}
        </div>
      ))}
    </div>
  </div>
);
        `}
          </code>
        </pre>
      ),
    },
  ];

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

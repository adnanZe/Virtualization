import React, { useState } from "react";
import "./Presentation.css";
import { WithoutVirtualizationDemo } from "./components/WithoutVirtualizationDemo";
import { VirtualizationDemo } from "./components/VirtualizationDemo";

export const Presentation: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Introduction to Virtualization",
      content:
        "Virtualization in frontend development optimizes the rendering of large lists or tables by only rendering visible items in the DOM.",
    },
    {
      title: "Key Concepts",
      content: (
        <ul>
          <li>
            <strong>DOM (Document Object Model):</strong> Represents the page
            structure as a tree of objects.
          </li>
          <li>
            <strong>Virtual DOM:</strong> A virtual representation of the UI
            synced with the real DOM by libraries like React.
          </li>
        </ul>
      ),
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
      title: "Without Virtualization",
      content: <WithoutVirtualizationDemo />,
    },
    {
      title: "Implementation Example",
      content: <VirtualizationDemo />,
    },
    {
      title: "Main Breakdown of Virtualization",
      content: (
        <>
          <h2>Components of Virtualization</h2>
          <ul>
            <li>
              <strong>Container:</strong> The scrollable element that holds the
              virtualized content.
            </li>
            <li>
              <strong>Buffer:</strong> Additional items rendered before and
              after the visible area to ensure smooth scrolling.
            </li>
            <li>
              <strong>Viewport:</strong> The visible area of the container where
              items are rendered.
            </li>
            <li>
              <strong>Item Renderer:</strong> The function or component
              responsible for creating and updating item elements.
            </li>
          </ul>
          <h2>Event Listeners to Maintain</h2>
          <ul>
            <li>
              <strong>Scroll Listener:</strong> Tracks the scroll position to
              determine which items to render or remove.
            </li>
            <li>
              <strong>Resize Listener:</strong> Adjusts the rendering logic when
              the container size changes (optional based on layout).
            </li>
          </ul>
          <h2>Conclusion</h2>
          <p>
            Virtualization is essential for performance optimization in
            applications dealing with large datasets. It ensures a smooth user
            experience by rendering only the necessary items. Proper management
            of event listeners, especially scroll events, is crucial for
            effective virtualization.
          </p>
        </>
      ),
    },
  ];

  const [contentVisible, setContentVisible] = useState(false);
  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div>
      <div
        key={currentSlide}
        className="slide animate-slide"
        onClick={() => setContentVisible(!contentVisible)}>
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

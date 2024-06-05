import React, { useEffect, useRef, useState, useCallback } from "react";

const totalItems = 1000;
const itemHeight = 50;
const buffer = 2;

export const VirtualizationDemo: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const renderVisibleItems = useCallback(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    const scrollTop = scrollContainer.scrollTop;

    const containerHeight = scrollContainer.clientHeight;

    const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - buffer);
    const endIndex = Math.min(
      totalItems - 1,
      Math.ceil((scrollTop + containerHeight) / itemHeight) + buffer
    );

    setVisibleItems(
      Array.from(
        { length: endIndex - startIndex + 1 },
        (_, i) => startIndex + i
      )
    );
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    scrollContainer.addEventListener("scroll", renderVisibleItems);
    renderVisibleItems();

    return () => {
      scrollContainer.removeEventListener("scroll", renderVisibleItems);
    };
  }, [renderVisibleItems]);

  return (
    <div
      ref={scrollContainerRef}
      style={{ height: "200px", overflowY: "auto", border: "1px solid #ccc" }}>
      <div
        style={{
          height: `${totalItems * itemHeight}px`,
          position: "relative",
        }}>
        {visibleItems.map((index) => (
          <div
            key={index}
            style={{
              height: `${itemHeight}px`,
              borderBottom: "1px solid #ccc",
              position: "absolute",
              top: `${index * itemHeight}px`,
              width: "100%",
            }}>
            Item {index}
          </div>
        ))}
      </div>
    </div>
  );
};

export const WithoutVirtualizationDemo: React.FC = () => {
  const items = Array.from({ length: 1000 }, (_, index) => `Item ${index}`);

  return (
    <div
      style={{ height: "200px", overflowY: "auto", border: "1px solid #ccc" }}>
      {items.map((item, index) => (
        <div
          key={index}
          style={{ height: "50px", borderBottom: "1px solid #ccc" }}>
          {item}
        </div>
      ))}
    </div>
  );
};

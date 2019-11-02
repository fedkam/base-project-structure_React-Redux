import "./test-component.css";
import React from "react";

const TestComponent = ({ data }) => {
  return (
    <div>
      <h2>TestComponent</h2>
      <h1>Example: {data}</h1>
    </div>
  );
};

export default TestComponent;

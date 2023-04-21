import React, { useState } from "react";
import "./Gradient.css";

function randomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function generateRandomGradient() {
  const colors = [randomColor(), randomColor(), randomColor(), randomColor()];
  return colors;
}

export default function Gradient() {
  const [colors, setColors] = useState(generateRandomGradient());
  const [activeColors, setActiveColors] = useState([true, true, true, true]);
  const [gradientDirection, setGradientDirection] = useState("to bottom");

  const handleClick = (index) => {
    const newActiveColors = activeColors.slice();
    newActiveColors[index] = !newActiveColors[index];
    setActiveColors(newActiveColors);
  };

  const gradientColors = colors
    .map((color, index) => (activeColors[index] ? color : null))
    .filter((color) => color !== null);

  const gradientString = gradientColors.length
    ? `linear-gradient(${gradientDirection}, ${gradientColors.join(", ")})`
    : "";

  return (
    <div
      className="Gradient"
      style={{
        background: gradientString,
      }}
    >
      <h1 className="gradient-title">Gradient Generator</h1>

      <button onClick={() => setColors(generateRandomGradient())}>
        Generate Random Color 🌈
      </button>
      <div className="direction-buttons">
        <button onClick={() => setGradientDirection("0deg")}>⬆️ ⬇️</button>
        <button onClick={() => setGradientDirection("90deg")}>⬅️ ➡️</button>
        <button onClick={() => setGradientDirection("45deg")}> ↖️ ↘️ </button>
      </div>
      <div className="color-container">
        {colors.map((color, index) => (
          <div
            key={index}
            className="color-box"
            style={{
              backgroundColor: activeColors[index] ? color : "white",
            }}
            onClick={() => handleClick(index)}
          ></div>
        ))}
      </div>
      <div className="css-output">
        <pre>{`background: ${gradientString};`}</pre>
      </div>
    </div>
  );
}

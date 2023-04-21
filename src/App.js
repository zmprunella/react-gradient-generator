import React from "react";
import "./App.css";
import Gradient, { generateRandomGradient } from "./Gradient";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Gradient bgColor={generateRandomGradient()} />
      </header>
    </div>
  );
}

export default App;

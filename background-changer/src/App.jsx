import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div className="container" style={{ backgroundColor: color }}>
      <div className="buttons">
        <button
          style={{ backgroundColor: "blue", color: "white" }}
          onClick={() => setColor("blue")}
        >
          Blue
        </button>

        <button
          style={{ backgroundColor: "grey", color: "white" }}
          onClick={() => setColor("grey")}
        >
          Grey
        </button>

        <button
          style={{ backgroundColor: "green", color: "white" }}
          onClick={() => setColor("green")}
        >
          Green
        </button>

        <button
          style={{ backgroundColor: "red", color: "white" }}
          onClick={() => setColor("red")}
        >
          Red
        </button>

        <button
          style={{ backgroundColor: "yellow", color: "black" }}
          onClick={() => setColor("yellow")}
        >
          Yellow
        </button>

        <button
          style={{ backgroundColor: "aqua", color: "black" }}
          onClick={() => setColor("aqua")}
        >
          Aqua
        </button>

        <button
          style={{ backgroundColor: "white", color: "black" }}
          onClick={() => setColor("white")}
        >
          White
        </button>

        <button
          style={{ backgroundColor: "black", color: "white" }}
          onClick={() => setColor("black")}
        >
          Black
        </button>
      </div>
    </div>
  );
}

export default App;

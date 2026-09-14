import { useState } from "react";
import "./App.css";

function App() {
  const [dice, setDice] = useState(1);
  const [rolling, setRolling] = useState(false);

  function rollDice() {
    setRolling(true);

    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      setDice(randomNumber);
      setRolling(false);
    }, 500);
  }

  return (
    <div className="app">
      <div className="dice-card">
        <h1>🎲 Dice Roller</h1>
        <p className="subtitle">Feeling lucky?</p>

        <div className={`dice ${rolling ? "rolling" : ""}`}>{dice}</div>

        <button onClick={rollDice} disabled={rolling}>
          {rolling ? "Rolling..." : "ROLL THE DICE"}
        </button>

        <p className="result">
          You rolled <span>{dice}</span>!
        </p>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  // let counter = 15;

  const AddValue = () => {
    if (counter < 20) {
      // counter = counter + 1;
      setCounter((newCounter) => newCounter + 1);
      setCounter((newCounter) => newCounter + 1);
      setCounter((newCounter) => newCounter + 1);
      setCounter((newCounter) => newCounter + 1);
    }
  };

  const removevalue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={AddValue}>Add value </button>
      <br />
      <button onClick={removevalue}>remove value</button>
    </>
  );
}

export default App;

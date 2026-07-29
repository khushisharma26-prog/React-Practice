import { useState } from "react";
import "./App.css";

function App() {
  const [isON, setisOn] = useState(false);

  return (
    <>
      <h1>{isON ? "Bulb is ON 💡" : "Bulb is OFF ⚫"}</h1>

      <div className="container">
        <div
          className="bulb"
          style={{
            backgroundColor: isON ? "yellow" : "gray",
            boxShadow: isON ? "0 0 40px yellow" : "none",
          }}
        ></div>
      </div>

      <div className="container">
        <button
          className="btn"
          onClick={() => {
            setisOn(!isON);
          }}
        >
          {isON ? "Turn OFF" : "Turn ON"}
        </button>
      </div>
    </>
  );
}

export default App;

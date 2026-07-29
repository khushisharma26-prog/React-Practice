import React from "react";
import { useState } from "react";
import "./App.css";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContext.Provider>
      <h1>React with Chai</h1>
    </UserContext.Provider>
  );
}

export default App;

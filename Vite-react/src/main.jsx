import React from "react";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";

const AnotherUser = "Khushi";
const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Click me to visit Google",
  AnotherUser,
);
createRoot(document.getElementById("root")).render(reactElement);

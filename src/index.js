import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

// import App from "./Tic-Tac-Toe";
// import App from "./thinking-in-react";
// import Gallery from "./my-first-component";
// import TodoList from "./writing-markup-with-jsx";
// import Avatar from "./5-js-in-jsx-with-curly-braces";
import Profile from "./6-passing-props-to-component"

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Profile />
  </StrictMode>
);
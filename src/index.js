import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

// import App from "./Tic-Tac-Toe";
// import App from "./thinking-in-react";
// import Gallery from "./my-first-component";
// import TodoList from "./writing-markup-with-jsx";
import Avatar from "./js-in-jsx-with-curly-braces";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Avatar />
  </StrictMode>
);
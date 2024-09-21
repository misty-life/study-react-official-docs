import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

// import App from "./Tic-Tac-Toe";
// import App from "./thinking-in-react";
// import Gallery from "./my-first-component";
// import TodoList from "./writing-markup-with-jsx";
// import Avatar from "./5-js-in-jsx-with-curly-braces";
// import Profile from "./6-passing-props-to-component"
// import PackingList from "./7-conditional-rendering";
import List from "./8-rendering-lists";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <List />
  </StrictMode>
);
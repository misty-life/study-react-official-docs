import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

// import App from "./Tic-Tac-Toe";
// import App from "./thinking-in-react";
import Gallery from "./my-first-component";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Gallery />
  </StrictMode>
);
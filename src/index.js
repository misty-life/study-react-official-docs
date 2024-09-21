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
// import List from "./8-rendering-lists";
import App from "./9-keeping-components-pure";

// StrictMode는 컴포넌트를 두 번씩 호출하면서 순수 함수인지 체크,
// 프로덕션에는 영향을 주지 않기 때문에 성능에는 문제가 없다.
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
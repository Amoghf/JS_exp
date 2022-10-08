import React from "react";
import ReactDOM from "react-dom";
const fname = "Amogh";
const lname = "firke";
const num = 7;

ReactDOM.render(
  <div>
    <h1>
      Hello {fname} {lname}!
    </h1>
    <p>my lucky number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);

// there are many ways to this

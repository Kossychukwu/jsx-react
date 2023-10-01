import React from "react";

import { createRoot } from "react-dom/client";

const container = document.getElementById("root");

const root = createRoot(container);

const number = Math.floor(Math.random() * 10);

const fName = "rick";
const lName = "patrick";

root.render(
  <div>
    <h1>hello {fName + " " + lName}</h1>
    <p>your favorite number is {number} </p>
  </div>
);

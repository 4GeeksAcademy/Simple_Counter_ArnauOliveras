//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";

let secondsElapsed = 0;
const root = ReactDOM.createRoot(document.getElementById("root"));


function renderApp() {
  root.render(<SecondsCounter seconds={secondsElapsed} />);
  secondsElapsed++;
}

setInterval(renderApp, 1000);

renderApp();
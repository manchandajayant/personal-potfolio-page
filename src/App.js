import React from "react";
import logo from "./logo.svg";
import "./App.css";
import tape from "./imgs/tape.jpg";
import Men from "./Hamburger/Men";
function App() {
  return (
    <div>
      <div className="App">
        <Men />

        <h1
          style={{
            position: "absolute",
            top: "-9px",
            left: "16px",
          }}
        >
          Jayant Manchanda
        </h1>

        <h2
          style={{
            position: "absolute",
            top: "35px",
            left: "16px",
          }}
        >
          Freelance Developer/Sound Designer
        </h2>
      </div>
    </div>
  );
}

export default App;

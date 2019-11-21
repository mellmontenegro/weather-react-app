import React from "react";
import Loader from "react-loader-spinner";
import Temperature from "./Temperature";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Loader type="Puff" color="#09d3ac" height={50} width={50} />
        <Temperature city="Belo Horizonte" />
            Open Source Code
          </a>{" "}
          by Mariana Almeida
        </small>
      </header>
    </div>
  );
}

export default App;

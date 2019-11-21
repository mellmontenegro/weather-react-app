import React from "react";
import Loader from "react-loader-spinner";
import Temperature from "./Temperature";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Windows!</p>
        <Loader type="Puff" color="#09d3ac" height={50} width={50} />
        <Temperature city="BH" />
        <a
          className="App-link"
          href="https://github.com/mellmontenegro/weather-react-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Source Code
        </a>{" "}
        by Mariana Almeida
      </header>
    </div>
  );
}

export default App;

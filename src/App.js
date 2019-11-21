import React from "react";
import "./App.css";
import Loader from "react-loader-spinner";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Windows!</p>
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
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

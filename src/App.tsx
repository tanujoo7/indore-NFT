import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [netError, setNetError] = useState(false);
  let age: number;
  const onClickHandler = () => {
    setNetError((previousState): boolean => {
      return !previousState;
    });
    console.log("button Clicked");
  };

  return (
    <>
      {netError ? (
        <div className="error-backdrop">
          <div className="error-container">
            <h3>Wrong Network</h3>
            <p>Please change network</p>
            <button onClick={onClickHandler}>Ok</button>
          </div>
        </div>
      ) : null}

      <div
        className="App"
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          marginTop: "15%",
        }}
      >
        <button onClick={onClickHandler}>Show Error</button>
      </div>
    </>
  );
}

export default App;

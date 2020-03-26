import React from "react";
import logo from "./logo.svg";
import "./App.css";
import starwarlogo from "./Star_Wars_Logo.svg";
import MasterPage from "./Components/masterpage";
import "./Components/Custom.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={starwarlogo} alt="starwarlogo" />
      </header>
      <MasterPage></MasterPage>
    </div>
  );
}

export default App;

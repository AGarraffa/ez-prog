// import logo from './logo.svg';
import React  from "react";
import './App.css';
// bring in the DB stuff from SQL
// import {
//   BrowserRouter as Router, 
//   Routes,
//   Route,
// } from "react-router-dom";

// components here are for testing purposes
import CreatePad from "./Components/CreatePad/CreatePad";
import CreateProject from "./Components/CreateProject/CreateProject";
// import CreateSection from "./Components/CreateSection/CreateSection";
import CreateWell from './Components/CreateWell/CreateWell';
// import HoleLocation from "./Components/HoleLocation/HoleLocation";
// import WellTops from "./Components/WellTops/WellTops";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <h1>EZ Prog!</h1>
        <CreateProject />
        <CreatePad />
        <CreateWell />

      </header>
    </div>
  );
}

//consruct the SQL API endpoing using httpLink


export default App;

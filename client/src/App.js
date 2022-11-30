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
import CreateSection from "./Components/CreateSection/CreateSection";
import CreateWell from './Components/CreateWell/CreateWell';
import CreateTop from './Components/CreateTop/CreateTop';
import WellTops from './Components/WellTops/WellTops';
// import HoleLocation from "./Components/HoleLocation/HoleLocation";
// import WellTops from "./Components/WellTops/WellTops";

function App() {

  // testing the fetch
  // need to change the header to Access-Control-Allow-Origin: * (this is a security risk but for dev it's fine) but not sure where to insert it
  fetch('http://localhost:3001/api/pad').then((res) => res.json().then((data) => 
  {
    console.log(data);
  }))

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

        <h2>Create Project</h2>
        <CreateProject />
        <h2>Create Pad</h2>
        <CreatePad />
        <h2>Create Well</h2>
        <CreateWell />
        <h2>Create Section</h2>
        <CreateSection />
        <h2>Create Top</h2>
        <CreateTop />
        <h2>Well Tops</h2>
        <WellTops />
      </header>
    </div>
  );
}

//consruct the SQL API endpoing using httpLink


export default App;

import logo from './logo.svg';
import React  from "react";
import './App.css';
// bring in the DB stuff from SQL
// import {
//   BrowserRouter as Router, 
//   Routes,
//   Route,
// } from "react-router-dom";

//import the pages (ie home, well search, etc);

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
        <h1>Hello World!</h1>
      </header>
    </div>
  );
}

//consruct the SQL API endpoing using httpLink


export default App;

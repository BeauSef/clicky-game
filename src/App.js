import React, { Component } from 'react';
import './App.css';
import Card from "./componets/Card/Card";
import Header from "./componets/Header/Header";
import Nav from "./componets/Nav/Nav";

class App extends Component {
  // Setting State
  state = {
    count: 0,
    topScore: 0
  }
updateCurrentScore = (newScore) =>{
this.state({count: newScore});
}

updateCurrentScore = (highScore) =>{
this.state({topScore: highScore});
  }




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
          </a>
        </header>
      </div>
    );
  }
}

export default App;

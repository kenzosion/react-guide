import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>HI THERE</h1>
        <p>This is working woohoo</p>
        <Person />
      </div>
    );
  }
}

export default App;

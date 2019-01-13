import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Hiya', age: 28 },
      { name: 'Hiyo', age: 38 },
      { name: 'Hiyi', age: 48 },
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>HI THERE</h1>
        <p>This is working woohoo, test this out { Math.floor(Math.random() * 30)}</p>
        <Person name={this.state.persons[0].name} />
        <Person name='testing123'> My hobby is: coding</Person>

      </div>
    );
  }
}

export default App;

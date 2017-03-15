import React, { Component } from 'react';
import Hours from './hours.js';
import Minutes from './minutes.js';
import Seconds from './seconds.js';

class App extends Component {
  constructor() {
    super()
  }
  testLogger() {
    console.log("hello from App");
  }
  render() {
    return (
      <div>
        <h1>Clock</h1>
        <Hours hours={3} />
        <Minutes minutes={30} />
        <Seconds seconds={40} />
        {/*
      */}
      </div>
    )
  }
}



export default App

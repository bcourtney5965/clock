import React, { Component } from 'react';
// import { Link } from 'react-router'

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
        <h1>Navigation</h1>
      </div>
    )
  }
}

export default App

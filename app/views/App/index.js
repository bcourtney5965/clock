import React, { Component } from 'react';
import Hours from './hours.js';
import Minutes from './minutes.js';
import Seconds from './seconds.js';

class App extends Component {
  constructor() {
    super()
    this.hours;
    this.minutes;
    this.seconds;
  }
  componentDidMount() {
    setInterval(() => {
      var date = new Date
      var hours = date.getHours();
      this.hours = hours;
      var minutes = date.getMinutes();
      this.minutes = minutes;
      var seconds = date.getSeconds();
      this.seconds = seconds;
      console.log(`${hours}:${minutes}:${seconds}`);
    }, 1000)
  }
  render() {
    return (
      <div>
        <h1>Clock</h1>
        <Hours hours={this.hours} />
        <Minutes minutes={this.minutes} />
        <Seconds seconds={this.seconds} />
      </div>
    )
  }
}



export default App

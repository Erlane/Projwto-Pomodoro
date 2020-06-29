import React, { Component } from 'react';
import './index.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      time: 1500,
      timer: false,
    }
  }

  startTime = () => {
    if (this.state.timer === false) {
      this.setState({ timer: true })
      this.count = setInterval(() =>
        this.setState({
          time: this.state.time - 1,
        }),
        1000);
    }
  }

  pausedTime = () => {
    clearInterval(this.count);
    this.setState({
      timer: false,
    })
  }

  stopTime = () => {
    clearInterval(this.count);
      this.setState({
        time: 1500,
        timer: false,
      })
    }

  render() {
    return (
      <div className="container">
        <h1>My Pomodoro</h1>
        <section>
          <div className="timePlay" onClick={this.startTime}> PLAY </div>
          <div className="timePause" onClick={this.pausedTime}> PAUSE </div>
          <div className="timeStop" onClick={this.stopTime}> STOP </div>
        </section>
        <div className="circle">
          <div className="content">
            <p className="time">{Math.floor(this.state.time / 60)}:{this.state.time % 60 < 10 ? `0${this.state.time % 60}` : this.state.time % 60}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

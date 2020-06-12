import React, { Component } from 'react';


class App extends Component { 
  constructor() {   
    super()
    this.state = {
      time: 1500,
      timer: false,
      
    }
  }

  startTime = () => {
   this.timer = setInterval(() =>
      this.setState({
       time: this.state.time - 1,
      }), 
    1000);
  }
  
  pausedTime = () => {
    clearInterval(this.startTime);
      // timer: true,
  }

  stopTime = () => {
    clearTimeout(this.startTime);
  }

 
  render() {
    return (
    <div className="container">
        <h1>======== Meu Pomodoro ========</h1>
        <section>
          <div className="timePlay" onClick={this.startTime}> PLAY </div>
          <div className="timePause" onClick={this.pausedTime}> PAUSE </div>
          <div className="timeStop" onClick={this.stopTime}> STOP </div>
        </section>
        <div className="circle">
          <div className="content">
              {/* <p className="paragraph">Sessão</p> */}
    <p className="time">{Math.floor(this.state.time / 60)}:{this.state.time % 60 < 10 ? `0${this.state.time % 60}` : this.state.time % 60}</p>
          </div>
        </div>
    </div>
    );
  }
}

export default App;

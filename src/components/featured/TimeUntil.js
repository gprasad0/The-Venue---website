import React, { Component } from "react";
import Fade from "react-reveal/Fade";
class TimeUntil extends Component {
  state = {
    deadline: "Dec 29 2019",
    seconds: "0",
    minutes: "0",
    hours: "0",
    days: "0"
  };

  getTime = () => {
    let deadLine = Date.parse(this.state.deadline) - Date.parse(new Date());
    console.log("deadoine", deadLine);
    if (deadLine < 0) {
      console.log("time has lapsed");
    } else {
      let hours = Math.floor((deadLine / (1000 * 60 * 60)) % 24);
      let days = Math.floor(deadLine / (1000 * 60 * 60 * 24));

      let seconds = Math.floor((deadLine / 1000) % 60);
      let minutes = Math.floor((deadLine / 1000 / 60) % 60);
      this.setState({
        seconds,
        minutes,
        hours,
        days
      });
    }
  };

  componentDidMount = () => {
    setInterval(() => {
      this.getTime();
    }, 1000);
  };

  render() {
    return (
      <div>
        <Fade left delay={1000}>
          <div className="countdown_wrapper">
            <div className="countdown_top">Event starts in</div>
            <div className="countdown_bottom">
              <div className="countdown_item">
                <div className="countdown_time">
                {this.state.days}
                  <div className="countdown_tag">Days</div>
                </div>
              </div>
              <div className="countdown_item">
                <div className="countdown_time">
                {this.state.hours}<div className="countdown_tag">Hs</div>
                </div>
              </div>
              <div className="countdown_item">
                <div className="countdown_time">
                {this.state.minutes}
                  <div className="countdown_tag">Mins</div>
                </div>
              </div>
              <div className="countdown_item">
                <div className="countdown_time">
                {this.state.seconds}
                  <div className="countdown_tag">Sec</div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default TimeUntil;

import React, { Component } from "react";

class TimeUntil extends Component {
  render() {
    return (
      <div>
        <div className="countdown_wrapper">
          <div className="countdown_top">Event starts in</div>
          <div className="countdown_bottom">
            <div className="countdown_item">
              <div className="countdown_time">
                23
                <div className="countdown_tag">Days</div>
              </div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">
                2
                <div className="countdown_tag">HS</div>
              </div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">
                20
                <div className="countdown_tag">MIN</div>
              </div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">
                40
                <div className="countdown_tag">SEC</div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default TimeUntil;

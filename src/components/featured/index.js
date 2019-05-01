import React, { Component } from "react";
import Carrousel from "./Carrousel";
import TimeUntil from './TimeUntil'
class Featured extends Component {
  render() {
    return (
      <div style={{ position: "relative" }}>
        <div>
        <Carrousel />
          <div className="artist_name">
            <div className="wrapper">eminem</div>
          </div>
        </div>
        <TimeUntil />
      </div>
    );
  }
}

export default Featured;

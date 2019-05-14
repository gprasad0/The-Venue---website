import React, { Component } from "react";
import Button from '../util/Button';
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Fade";
class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };

  onRevealed = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  };
  componentDidUpdate = () => {
    setTimeout(() => {
      this.onRevealed(); 
    }, 30);
  };

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.onRevealed()}>
            <div className="discount_porcentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div classname="discount_description">
              <h3>Purchase tickets</h3>
              <p>
                Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum{" "}
              </p>
              <Button text="PURCHASE TICKETS" color="orange" href="https://google.com"/>
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;

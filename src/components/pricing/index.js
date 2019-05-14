import React, { Component } from "react";
import Buttons from '../util/Button';
import Zoom from 'react-reveal/Zoom'
class Pricing extends Component {
  state = {
    prices: [10, 20, 30],
    positions: ["Balcony", "Medium", "Star"],
    desc: [
      "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum",
      "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum",
      "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum"
    ],
    linkTo: ["https://google.com", "https://google.com", "https://google.com"],
    delay:[500,0,500]
  };

  showBoxes = () =>
    this.state.prices.map((box, i) => (
        <Zoom delay={this.state.delay[i]}>
      <div className="pricing_item">
        <div className="pricing_inner_wrapper">
          <div className="pricing_title">
            <span>${this.state.prices[i]}</span>
            <span>{this.state.positions[i]}</span>
          </div>
          <div className="pricing_description">{this.state.desc[i]}</div>
          <div className="pricing_buttons"><Buttons href={this.state.linkTo[i]} color="orange" text="Purchase" /></div>
        </div>
      </div>
      </Zoom>
    ));

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;

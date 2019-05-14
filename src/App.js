import React from "react";
import "./resources/styles.css";
import Header from "./components/header_footer/Header";
import Featured from "./components/featured/index";
import VenueInfo from "./components/venueInfo/VenueInfo";
import HighLights from "./components/highlights/HighLights";
import Pricing from "./components/pricing/index";
import Footer from './components/header_footer/Footer';
import Location from './components/location/Location';
function App() {
  return (
    <div className="App" style={{ height: "1000px" }}>
      <Header />
      <Featured />
      <VenueInfo />
      <HighLights />
      <Pricing />
      <Location />
      <Footer />
    </div>
  );
}

export default App;

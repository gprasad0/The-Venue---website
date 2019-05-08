import React from "react";
import "./resources/styles.css";
import Header from "./components/header_footer/Header";
import Featured from "./components/featured/index";
import VenueInfo from "./components/venueInfo/VenueInfo";
import HighLights from "./components/highlights/HighLights";
function App() {
  return (
    <div className="App" style={{ height: "1000px" }}>
      <Header />
      <Featured />
      <VenueInfo />
      <HighLights />
    </div>
  );
}

export default App;

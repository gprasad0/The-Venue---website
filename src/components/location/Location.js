import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.4407971134247!2d77.50273454975756!3d12.814767821724587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae410fe0c81e2d%3A0x7751c3ec252417e!2sThe+Venue!5e0!3m2!1sen!2sin!4v1557811051865!5m2!1sen!2sin"
        width="100%"
        height="500"
        frameborder="0"
        style={{ border: "0" }}
        allowfullscreen
      />
      <div className="location_tag">
        <div>Location</div>
      </div>

      
    </div>
  );
};

export default Location;

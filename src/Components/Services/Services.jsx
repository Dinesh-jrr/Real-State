import React from "react";
import "./Services.css";
import Container from '../../Components/Services/Container'


function Services() {
  return (
    <div className="services">
      <div className="services-top">
        <h3 className="services-title">Our Services</h3>
        <h1>Our Main Focus</h1>
        <div className="top-content">
          <Container></Container>
          <Container></Container>
          <Container></Container>
        </div>
      </div>
      <div className="services-lower">
        <div className="lower-box">
            <img src="" alt="" />
            <h3>260+</h3>
            <p>Total Construction</p>
          </div>
      </div>
    </div>
  );
}
export default Services;

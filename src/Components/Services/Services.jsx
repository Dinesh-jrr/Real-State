import React from "react";
import "./Services.css";
import Container from '../../Components/Services/Container'


function Services() {
  return (
    <div className="services">
      <div className="services-top">
        <h3 className="services-title">Our Services</h3>
        <h1>Our Main Focus</h1>
            <Container></Container>
            <Container></Container>
      </div>
      <div className="services-lower"></div>
    </div>
  );
}
export default Services;

import React from "react";
import "./Features.css";
import Box from '../../Components/Features/Box'
function Features() {
  return (
    <div className="features">
      <h4 className="features-title">FEATURED LISTING</h4>
      <h3 className="features-info">We Bring Dream Homes To Reality</h3>
      <div className="features-content">
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
      </div>
    </div>
  );
}
export default Features;

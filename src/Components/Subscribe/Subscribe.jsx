import React from "react";
import "./Subscribe.css";

function Subscribe() {
  return (
    <div className="subscribe">
      <div className="subscribe-left">
        <h3>Join Our Newsletter Now</h3>
        <p>Register now to get updates on promotions...</p>
      </div>
      <div className="subscribe-right">
        <input type="text" placeholder="Enter Your Email To Subscribe" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}
export default Subscribe;

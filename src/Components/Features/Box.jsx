import React from "react";
import './Features.css'
import Info from '../../Components/Features/Info';
import room from "../../assets/room.png";
import location from '../../assets/location.png';
import clock from '../../assets/clock.png';
import user from '../../assets/user.png';

function Box(){
    return(
        <div className="features-container">
          <div className="top-img">
            <img src={room} alt="" />
            <p>For Sale</p>
          </div>
          <h3>1963 S Crescent Heights Blvd</h3>
          <div className="container-location">
            <img src={location} alt="" />
            <h5>Hills,CA 90210</h5>
          </div>
            <hr />
            <div className="container-middle">
                <Info></Info>
                <Info></Info>
                <Info></Info>
                <Info></Info>
        </div>
          <div className="features-container-lower">
            <div className="lower-name">
              <img src={user} alt="" />
              <h4>Michel Smith</h4>
            </div>
            <div className="lower-time">
              <img src={clock}alt="" />
              <h4>1 days ago</h4>
            </div>
          </div>
          <button className="container-button">$5,304,000</button>
        </div>
    )
}
export default Box
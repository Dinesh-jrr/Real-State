import React from "react";
import './Properties.css'
import property from '../../assets/property.png'
import beds from '../../assets/beds.png'
import baths from '../../assets/baths.png'
import agents from "../../assets/agents.png";

function Container(){
    return(
        <div className="properties-container">
        <img className="properties-img" src={property} alt="" />
        <p className="container-name">SINGAPORE</p>
        <h4 className="container-title">$300,000</h4>
        <p className="container-desc">5232 North Carolina Ave 21BC</p>
        <h4 className="container-location">California,USA</h4>
        <div className="properties-content">
            <div className="content-item">
                <img src={beds} alt="" />
                <p>4 beds</p>
            </div>
            <div className="content-item">
                <img src={baths} alt="" />
                <p>4 baths</p>
            </div>
        </div>
        <div className="container-lower">
            <img src={agents} alt="" />
            <div className="lower-content">
                <h4>William Hue</h4>
                <p>Estate Agents</p>
            </div>
        </div>
    </div>
    )
}
export default Container
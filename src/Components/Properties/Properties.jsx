import React from "react";
import './Properties.css'

function Properties(){
    return(
        <div className="properties">
            <h5 className="properties-title">PROPERTIES</h5>
            <h3 className="properties-headline">Our Popular Properties</h3>
            <div className="properties-container">
                <img src="" alt="" />
                <p>SINGAPORE</p>
                <h4>$300,000</h4>
                <p>5232 North Carolina Ave 21BC</p>
                <h4>California,USA</h4>
                <div className="properties-content">
                    <div className="content-item">
                        <img src="" alt="" />
                        <p>4 beds</p>
                    </div>
                    <div className="content-item">
                        <img src="" alt="" />
                        <p>4 beds</p>
                    </div>
                </div>
                <div className="container-lower">
                    <img src="" alt="" />
                    <div className="lower-content">
                        <h4>William Hue</h4>
                        <p>Estate Agents</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Properties
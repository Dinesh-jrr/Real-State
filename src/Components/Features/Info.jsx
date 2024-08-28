import React from "react";
import './Features.css'
import area from '../../assets/area.png'

function Info(){
    return(
        <div className="container-info">
              <img src={area} alt="" />
              <h4>2400 Square Feet</h4>
        </div>
    )
}
export default Info
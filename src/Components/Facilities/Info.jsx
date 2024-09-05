import React from "react";
import './Facilities.css'
import check from '../../assets/check.png'

function Info(){
    return(
        <div className="info-heading">
        <img src={check} alt="" />
        <p>Parking Space</p>
    </div>
    )
}
export default Info
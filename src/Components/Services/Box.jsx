import React from "react";
import'./Services.css'
import construction from '../../assets/construction.png'

function Box(){
    return(
        <div className="lower-box">
            <img src={construction} alt="" />
            <h3>260+</h3>
            <p>Total Construction</p>
          </div>
    )
}
export default Box
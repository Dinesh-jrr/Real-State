import React from "react";
import './Services.css'
import payment from '../../assets/payment.jpeg'
import arrow from '../../assets/arrow.png'

function Container(){
    return(
        <div className="services-container">
          <img src={payment} alt="" />
          <h3>Buy a Home</h3>
          <p>
            over 1 million+ homes for sale available on the website, we can
            match you with a house you will want to call home.
          </p>
          <div className="services-find">
            <h5>Find A Home</h5>
            <img src={arrow} alt="" />
          </div>
        </div>
    )
}
export default Container;
import React from "react";
import './Agents.css'
import profile from '../../assets/profile.png'
import phone from '../../assets/phone.png'

function Box(){
    return(
        <div className="agents-box">
                <img src={profile}alt="" />
                <p className="info">3 years Experience</p>
                <p className="name">David Wing</p>
                <p className="details">Eco Builders</p>
                <div className="agents-contact">
                    <img src={phone} alt="" />
                    <p>Call: +1 234 567 890</p>
                </div>
            </div>
    )
}
export default Box
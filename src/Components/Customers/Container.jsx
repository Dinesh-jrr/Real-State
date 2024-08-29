import React from "react";
import './Customers.css'
import agents from "../../assets/agents.png";

function Container(){
    return(
        <div className="customers-container">
                <p className="container-content">I could probably go into sales for you.I am completely blown away.After using SEO my business skyrocketed! The very best.</p>
                <div className="container-lower">
                    <img src={agents} alt="" />
                    <div className="lower-info">
                    <h4>Grace Hall</h4>
                    <p>Customer</p>
                    </div>
                </div>
            </div>
    )
}
export default Container
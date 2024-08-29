import React from "react";
import './Customers.css'
import Container from '../../Components/Customers/Container'
import agents from "../../assets/agents.png";
import circle from '../../assets/circle.png'

function Customers(){
    return(
        <div className="customers">
            <h4>Our Testimonials</h4>
            <h3>What Our Customers Says</h3>
            <div className="customers-middle">
            <Container></Container>
            <Container></Container>
            <Container></Container>
            </div>
            <div className="customers-lower">
                <img src={circle} alt="" />
                <img src={circle} alt="" />
                <img src={circle} alt="" />
                <img src={circle} alt="" />
                <img src={circle} alt="" />
            </div>
           
        </div>
    )
}
export default Customers

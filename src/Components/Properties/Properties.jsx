import React from "react";
import './Properties.css'
import Container from '../../Components/Properties/Container'
import circle from '../../assets/circle.png'

function Properties(){
    return(
        <div className="properties">
            <h5 className="properties-title">PROPERTIES</h5>
            <h3 className="properties-headline">Our Popular Properties</h3>
            <div className="properties-middle">
                <Container></Container>
                <Container></Container>
                <Container></Container>
            </div>
            <div className="properties-rating">
                    <img src={circle} alt="" />
                    <img src={circle} alt="" />
                    <img src={circle} alt="" />
            </div>
        </div>
    )
}
export default Properties
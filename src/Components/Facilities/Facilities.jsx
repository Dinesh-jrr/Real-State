import React from "react";
import './Facilities.css'
import home from '../../assets/home.png'
import video from '../../assets/video.png'
import check from '../../assets/check.png'
import arrow from '../../assets/arrow.png'
import Info from '../../Components/Facilities/Info'

function Facilities(){
    return(
        <div className="facilities">
            <div className="facilities-left">
                <img className="facilities-left-img1" src={home} alt="" />
                <img className="facilities-left-img2" src={video} alt="" />
            </div>
            <div className="facilities-right">
                <h4 className="facilities-right-title">OUR FACILITIES</h4>
                <h3 className="facilities-right-headline">The Experts In Local And International Property</h3>
                <p className="facilities-right-desc">Agent has an unknown printer took a gallery of type and scrambled it to make a type specimen book.It has survived not only five centuries but also the leap into electronic.</p>
                <div className="facilities-right-info">
                    <Info></Info>
                    <Info></Info>
                    <Info></Info>
                    <Info></Info>
                    <Info></Info>
                    <Info></Info>
                </div>
                <div className="facilities-right-lower">
                    <img src={arrow} alt="" />
                    <p>Read More</p>
                </div>
            </div>
        </div>
    )
}
export default Facilities
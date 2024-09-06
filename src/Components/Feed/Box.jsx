import React from "react";
import './Feed.css'
import property from '../../assets/property.png'
import user from '../../assets/user.png'
import calendar from '../../assets/calendar.png'

function Box(){
    return(
        <div className="feed-box">
        <div className="feed-box-top">
        <img src={property} alt="" />
        </div>
        <div className="feed-box-middle">
            <div className="box-middle-container">
            <div className="box-middle-content">
                <img src={user} alt="" />
                <p>William Seklo</p>
            </div>
            <div className="box-middle-content">
                <img src={user} alt="" />
                <p>William Seklo</p>
            </div>
            </div>
            <div className="box-middle-headline">
                New Apartment Nice in the Best Canadian Cities
            </div>
        </div>
        <hr />
        <div className="feed-box-lower">
            <div className="box-lower-content">
                <img src={calendar} alt="" />
                <p>July 10, 2022</p>
            </div>
            <h4>READ MORE</h4>
        </div>
    </div>
    )
}
export default Box
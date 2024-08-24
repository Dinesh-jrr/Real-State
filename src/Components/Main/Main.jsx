import React from "react";
import './Main.css'
import home from '../../assets/home.jpeg'

function Main(){
    return(
        <div className="main">
            <div className="main-left">
                <h2 className="main-left-title">Discover A Place You'll Love To Live</h2>
                <p>Homie is a real estate solution that gives you the local scoop about homes.Search confidently with your trusted source of homes for sale or sales</p>
                <button className="main-button">Make An Enquiry</button>
            </div>
            <div className="main-right">
                 <img src=''alt="home" />
                <div className="main-right-rating">
                    <p>Customer Rating</p>
                    <h5>4.9</h5>
                    <img src="" alt="star" />
                </div>
                <div className="main-right-view">
                    <h3>Buy Your Dream Home</h3>
                    <h2>80+</h2>
                    <h3>Home Available</h3>
                    <button className="main-right-button">
                        View Details
                    </button>
                </div>

            </div>
        </div>
    )
}
export default Main
import React from "react";
import './Main.css'
import home from '../../assets/home.jpeg'
import rating from '../../assets/rating.png'

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
            </div>
            <div className="main-right-rating">
                    <p>Customer Rating</p>
                    <div className="rating-right">
                    <h2>4.9</h2>
                    <img src={rating} alt="star" />
                    </div>  
                </div>
            <div className="main-right-view">
                    <h3 className="title">Buy Your Dream Home</h3>
                    <h2>80+</h2>
                    <h3>Home Available</h3>
                    <button className="main-right-button">
                        View Details
                    </button>
                </div>
        </div>
    )
}
export default Main
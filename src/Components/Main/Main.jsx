import React from "react";
import "./Main.css";
import home from "../../assets/home.png";
import rating from "../../assets/rating.png";
import dropdown from '../../assets/dropdown.png'
import search from  '../../assets/search.png'


function Main() {
  return (
    <div className="main">
      <div className="main-left">
        <h2 className="main-left-title">
          Discover A Place You'll Love To Live
        </h2>
        <p>
          Homie is a real estate solution that gives you the local scoop about
          homes.Search confidently with your trusted source of homes for sale or
          sales
        </p>
        <button className="main-button">Make An Enquiry</button>
      </div>
       <div className="main-right">
          <img className="home-img" src={home} alt="home" />
          <div className="main-right-rating">
            <p>Customer Rating</p>
            <div className="rating-right">
              <h2>4.9</h2>
              <img src={rating} alt="star" />
            </div>
          </div>
           <div className="main-right-view">
            <h3 className="view-title">Buy Your Dream Home</h3>
            <h2>80+</h2>
            <h3 className="view-home">Home Available</h3>
            <button className="main-right-button">View Details</button>
          </div> 
      </div> 
      {/* loweer */}
      <div className="lower">
        <div className="location">
            <p>Choice Location</p>
            <img src={dropdown} alt="" />
        </div>
        <div className="bedroom">
            <p>Bedrooms</p>
            <img src={dropdown} alt="" />
        </div>
        <div className="rent">
            <p>For Rent</p>
            <img src={dropdown} alt="" />
        </div>
        <button className="search">
            <img src={search}alt="" />
            <p>Search</p>
        </button>
      </div>

    </div>
  );
}
export default Main;

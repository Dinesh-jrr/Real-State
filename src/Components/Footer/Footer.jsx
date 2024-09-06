import React from "react";
import './Footer.css'

function Footer(){
    return(
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-main">
                    <div className="main-up">
                    <img src="" alt="" />
                    <h4>Houzing</h4>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate vitae asperiores eos numquam, officia impedit quo eveniet dolorum. Vel dolor voluptate atque neque laborum fuga omnis enim facere ducimus consequuntur?</p>
                    <div className="main-lower">
                        <img src="" alt="" />
                    </div>
                </div>
                <div className="footer-top-links">
                    <h3>Quick Links</h3>
                    <h4>Home</h4>
                    <h4>About Us</h4>
                    <h4>Blog</h4>
                    <h4>FAQ</h4>
                    <h4>Services</h4>
                </div>

                <div className="footer-top-services">
                    <h3>Services</h3>
                    <h4>Wish List</h4>
                    <h4>Login</h4>
                    <h4>Submit a Request</h4>
                    <h4>Appointment</h4>
                    <h4>Promotional Offers</h4>
                </div>

                <div className="footer-top-contact">
                    <h3>Contact</h3>
                    <div className="top-contact-location">
                        <img src="" alt="" />
                        <p>124 Brooklyn, New York United States</p>
                    </div>
                    <div className="top-contact-phone">
                        <img src="" alt="" />
                        <p>+977 9861524192</p>
                    </div>
                    <div className="top-contact-mail">
                        <img src="" alt="" />
                        <p>info@houzing.com</p>
                    </div>
                </div>

            </div>
            <hr />
            <div className="footer-down">

            </div>
        </div>
    )
}
export default Footer
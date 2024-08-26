import React from "react";
import './About.css'
import villa from '../../assets/villa-icon.jpeg'


function Content(props){
    return(
        <div>
            <div className="right-lower-content">
                        <img src={props.img} alt="" />
                        <h5>Modern Villa</h5>
                        <p>When unknown printer took gallery of type and scraambled.</p>
                    </div>
        </div>
    )
}
export default Content
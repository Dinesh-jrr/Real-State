import React from "react";
import './Agents.css'
import Box from '../../Components/Agents/Box'


function Agents(){
    return(
        <div className="agents">
            <div className="agents-top">
            <h4>EXPERTISE IS HERE</h4>
            <h3>Our Growing Agents</h3>
            <div className="top-container">
            <Box></Box>           
            <Box></Box>           
            <Box></Box> 
            <Box></Box> 
            </div>
                     
            </div>
            <div className="agents-lower">
                <img src="" alt="" />
                <div className="lower-content">
                    <h4>Become An Agent</h4>
                    <p>Agent hen an unknown printer took a gallery scramble</p>
                </div>
                <button>Join Now</button>
            </div>
        </div>
    )
}
export default Agents
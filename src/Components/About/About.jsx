import React from 'react'
import './About.css'
import trophy from '../../assets/trophy.jpeg'
import about from '../../assets/about.png'

function About(){
    return(
        <div className='about'>
            <div className="about-left">
                <img className='about-img' src={about} alt="" />
                <div className="left-content">
                    <img src={trophy} alt="trophy" />
                    <p className="left-title">
                        National Real State Awards
                    </p>
                    <p className='analy'>Analysis</p>
                </div>
            </div>

            <div className="about-right">
                <div className="right-top">
                <h2 className="title">ABOUT US</h2>
                <p className='top-content'>We're On A Mission To Change View Of RealEstate Field.</p>
                <p className='top-content2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias sunt impedit recusandae corporis nesciunt saepe doloribus odit reprehenderit repellendus tempora? Ea maxime obcaecati illum sapiente aut amet dolor dolores. Officia?</p>
                </div>
                <div className="right-lower">
                    <div className="right-lower-content">
                        <img src="" alt="" />
                        <h5>Modern Villa</h5>
                        <p>When unknown printer took gallery of type and scraambled.</p>
                    </div>
                    <div className="right-lower-content">
                        <img src="" alt="" />
                        <h5>Modern Villa</h5>
                        <p>When unknown printer took gallery of type and scraambled.</p>
                    </div>
                </div>
                <div className='learn'>
                    <img src="" alt="" />
                    <p>Learn More</p>
                </div>

            </div>

        </div>
    )
}
export default About
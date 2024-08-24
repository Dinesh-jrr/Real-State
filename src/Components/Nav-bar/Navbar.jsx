import React from 'react'
import './Navbar.css'
import search from '../../assets/search.png'

function Navbar(){
    return(
        <div className='navbar'>
            <div className='navbar-logo'>
                <img src="" alt="logo" />
                <h2>Houzing</h2>
            </div>
            <div className="navbar-menu">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="navbar-search">
                <img src={search} alt="search-button" />
            </div>
            <div className="navbar-started">
                <button>Get Started</button>
            </div>
        </div>
    )
}
export default Navbar
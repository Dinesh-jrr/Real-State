import React from "react";
import './Feed.css'
import property from '../../assets/property.png'
import user from '../../assets/user.png'
import calendar from '../../assets/calendar.png'
import Box from '../../Components/Feed/Box'

function Feed(){
    return(
        <div className="feed">
            <h4 className="feed-title">NEWS AND BLOGS</h4>
            <h3 className="feed-headline">Latest News Feed</h3>
            <div className="feed-container">
            <Box></Box>
            <Box></Box>
            <Box></Box>
            </div>

        </div>
    )
}
export default Feed
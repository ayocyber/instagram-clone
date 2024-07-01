import React from "react";
import ProfileIcon from "./ProfileIcon";
import users from "../Data/users";
import "../Style/Profile.css"

function Profile({username , caption , urlText , iconSize , captionSize , storyBoder , hideAccountName , image}){
    let accountName = username ? 
    username : 
    users[Math.floor(Math.random() * users.length)].username
    return(
        <div className="profile">
            <ProfileIcon 
            iconSize={iconSize} 
            storyBoder={storyBoder} 
            image={image}
            />
            {(accountName || caption ) && !hideAccountName &&(
                <div className="textContainer">
                    <span className="accountName">{accountName}</span>
                    <span className={`caption ${captionSize}`}>{caption}</span>
                </div>
            )}
            <a href="link">{urlText}</a>
        </div>
    )
}

export default Profile
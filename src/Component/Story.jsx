import React from "react";
import users from "../Data/users";
import ProfileIcon from "./ProfileIcon";
import "../Style/story.css"

function Story(){
    let accountName = users[Math.floor(Math.random() * users.length)].username

    if(accountName.length > 10){
        accountName = accountName.substring(0,10) + "..."
    }
    return(
        <div className="story">
            <ProfileIcon iconSize="big" storyBoder={true}/>
            <span className="accountName">{accountName}</span>
        </div>
    )
}

export default Story
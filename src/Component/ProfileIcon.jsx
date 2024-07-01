import React from "react";
import "../Style/ProfileIcon.css"

function ProfileIcon({iconSize , storyBoder , image}){
    function getRandomId(min , max){
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max -min + 1)) + min
    }
    let randomId = getRandomId(1,70)
    const profileImage = image ? image : `https://i.pravatar.cc/159?img=${randomId}`
    return(
        <div className={storyBoder ? "storyBoder" : ""}>
            <img className={`profileIcon ${iconSize}`} 
            src={profileImage} 
            alt="profile"/>
            
        </div>
    )
}

export default ProfileIcon
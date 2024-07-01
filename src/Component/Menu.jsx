import React from "react";
import "../Style/Menu.css"
import { ReactComponent as Home} from "../Images/home.svg"
import {ReactComponent as Explore }from "../Images/explore.svg"
import {ReactComponent as Notification } from "../Images/notification.svg"
import {ReactComponent as Messages } from "../Images/messages.svg"
import { ReactComponent as Reels } from "../Images/reels.svg"
import ProfileIcon from "./ProfileIcon";
import Pics2 from "../Images/profileImage.jpg"

function Menu(){
    return(
        <div className="menu">
            <Home className="icon"/>
            <Explore className="icon"/>
            <Notification className="icon"/>
            <Messages className="icon"/>
            <Reels className="icon"/>
            <ProfileIcon image={Pics2} iconSize="small" storyBoder={false}/>
        </div>
    )
}
export default Menu
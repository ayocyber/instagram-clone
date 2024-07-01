import React from "react";
import {ReactComponent as Notification } from "../Images/notification.svg"
import {ReactComponent as Comment} from "../Images/Comment.svg"
import {ReactComponent as Inbox} from "../Images/Inbox.svg"
import {ReactComponent as Bookmark} from "../Images/Bookmark.svg"
import "../Style/CardMenu.css"
function CardsMenu(){
    return(
        <div className="cardMenu">
            <div className="interaction">
                <Notification className="icon"/>
                <Comment className="icon"/>
                <Inbox className="icon"/>
                <div>
                    <Bookmark  className="icon"/>
                </div>
            </div>
        </div>
    )
}
export default CardsMenu
import React from "react";
import "../Style/Comments.css"
function Comments({accountName, comment}){
    return(
        <div className="commentContainer">
            <div className="accountName">{accountName}</div>
        <div className="comment">{comment}</div>
        </div>
    )
}

export default Comments
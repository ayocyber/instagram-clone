import React from "react";
import {ReactComponent as CardButton } from "../Images/CardButton.svg"
import Profile from "./Profile";
import CardsMenu from "./CardsMenu";
import Comments from "./Comments";
import "../Style/cards.css"


function Cards({storyBoder , image ,comments, likedByText , likedByNumber , hours}){
    return(
        <div className="card">
            <header>
                <Profile iconSize="medium" storyBoder={storyBoder}/>
                <CardButton className="cardButton"/>
            </header>
            <img className="cardImage" src={image} alt="card content"/>
             <CardsMenu/>
             <div className="likedby">
                <Profile iconSize="small" hideAccountName={true}/>
                <span>
                    Liked by <strong>{likedByText}</strong> and <strong>{likedByNumber} others </strong>
                </span>
             </div>
             <div className="comments">
                {comments.map(comments =>{
                    return(
                        <Comments 
                        key={comments.id} 
                        accountName ={comments.user} 
                        comments={comments.text}
                         />
                    ) 
                })}
             </div>
             <div className="timePosted">{hours} HOURS AGO</div>
            <div className="addComment">
                <div className="commenText">Add a comment...</div>
                <div className="postText">POST TEXT </div>
            </div>
        </div>
    )
}

export default Cards 
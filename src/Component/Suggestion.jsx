import React from "react";
import Profile from "./Profile";
import "../Style/Suggestion.css"

function Suggestion(){
    return(
        <div className="suggeestion">
            <div className="titleContainer">
                <div className="title">Suggestion For You</div>
                <a href="/" className="links-a">See All</a>
            </div>
            <div className="profiles">
            <Profile 
            caption="Followed by Gideon + 3 more" 
            urlText="Follow" iconSize="medium" 
            captionSize="small" 
            storyBoder={true}
            />
            </div>
            <div className="profiles">
             <Profile 
            caption="Followed by Lekan + 1 more" 
            urlText="Follow" iconSize="medium" 
            captionSize="small" 
            storyBoder={false}
            />
            </div>
            <div className="profiles">
             <Profile 
            caption="Follows you" 
            urlText="Follow" iconSize="medium" 
            captionSize="small" 
            storyBoder={false}
            />
            </div>
            <div className="profiles">
             <Profile 
            caption="Followed by Gideon + 7 more" 
            urlText="Follow" iconSize="medium" 
            captionSize="small" 
            storyBoder={true}
            />
            </div>
            <div className="profiles">
             <Profile 
            caption="Followed by Vincoly + 4 more" 
            urlText="Follow" iconSize="medium" 
            captionSize="small" 
            storyBoder={true}
            />
            </div>
        </div>
    )
}


export default Suggestion
import React from "react";
import Stories from "./Stories";
import "../Style/Card.css"
import Cards from "./Cards";
function Card(){
    const commentsOne = [
        {
          user: "raffagrassetti",
          text: "Woah dude, this is awesome! 🔥",
          id: 1,
        },
        {
          user: "therealadamsavage",
          text: "Like!",
          id: 2,
        },
        {
          user: "mapvault",
          text: "Niceeeee!",
          id: 3,
        },
      ];
    
      const commentsTwo = [
        {
          user: "mapvault",
          text: "Amazing content, keep it up!",
          id: 4,
        },
      ];
    
      const commentsThree = [
        {
          user: "dadatlacak",
          text: "Love this!",
          id: 5,
        },
      ];
    return(
        <div className="cards">
            <Stories/>
            <Cards 
            accountName="rafagrassett" 
            storyBoder={true} 
            image="https://picsum.photos/800/900" 
            comments={commentsOne} 
            likedByText="dadalacak" 
            likedByNumber={89} 
            hours={16} 
            />
            <Cards 
            accountName="rafagrassett" 
            storyBoder={true} 
            image="https://picsum.photos/seed/picsum/800/900" 
            comments={commentsTwo} 
            likedByText="dadalacak" 
            likedByNumber={89} hours={16} 
            />
            <Cards 
            accountName="rafagrassett" 
            storyBoder={true} 
            image="https://picsum.photos/800/900?grayscale" 
            comments={commentsThree} 
            likedByText="dadalacak" 
            likedByNumber={89} hours={16} 
            />
            <Cards 
            accountName="rafagrassett" 
            storyBoder={true} 
            image="https://picsum.photos/800/900/?blur" 
            comments={commentsOne} 
            likedByText="dadalacak" 
            likedByNumber={89} hours={16} 
            />
        </div>
    )
}
export default Card
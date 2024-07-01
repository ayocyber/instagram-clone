import React from "react";
import Sticky from "react-sticky-el/lib/basic-version";
import Profile from "./Profile";
import image from "../Images/profileImage.jpg"
import Suggestion from "./Suggestion";
import Footer from "./Footer";
import "../Style/Sidebar.css"
function Sidebar(){
    return(
        
            <Sticky topOffset={-80}>
                <div className="sidebar">
                    <Profile 
                    username="lawal.AYO" 
                    caption="Ayomide Lawal" 
                    urlText="Switch" 
                    iconSize="big" 
                    image={image}/>
                    <Suggestion/>
                   
                </div>
            </Sticky>
    )
}

export default Sidebar
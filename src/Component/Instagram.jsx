import React from "react";
import NavBar from "./Navbar";
import Card from "./Card";
import Sidebar from "./Sidebar";

function Instagram(){
    return(
        <div>
            <NavBar/>
            <main>
                <div className="containers">
                <Card/>  
                <Sidebar/> 
                
                </div>
            </main>
        </div>
    )
}

export default Instagram
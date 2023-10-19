import React, {useState,audio} from "react";   
import{NavLink} from "react-router-dom"

import NBA from "../assets/NBA.mp3"



function Header(){ 
   
    return(
        <header>
           

        <h1>
            NBA LEGENDS
        </h1>
       <audio controls src={NBA}/>
        
       
        <nav>
            <NavLink to="/players" end >Legends</NavLink>
        </nav>
        <nav>
            <NavLink to="/players/new" end >Add a Legend</NavLink>
        </nav>

        <nav>
            <NavLink to="/" end >Home</NavLink>
        </nav>


        </header>
        
    )
} 
export default Header 



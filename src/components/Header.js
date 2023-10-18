import React from "react";   
import{NavLink} from "react-router-dom"

function Header(){
    return(
        <header>

        <h1>
            NBA LEGENDS
        </h1>
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
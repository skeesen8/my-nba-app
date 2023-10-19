import React from "react"; 
import {useState} from "react"
import LikeButton from "./LikeButton";

function Players({project,onUpdateLegend}){
    const {name,id,yearsPlayed,averagePoints,careerPoints,championships,pictureUrl,likes,key,}=project

    function handleVote() {
        // console.log(key)
        fetch(`http://localhost:8003/Legends/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ likes: likes + 1 }),
        })
          .then((resp) => resp.json())
          .then((updatedLikes) => onUpdateLegend(updatedLikes));


}
  
    return(
        <div className="players">
        <img src={pictureUrl} />
        <p>
            {name}
            
        </p>
    
        <button onClick={handleVote}>Vote</button> {likes}
        
        <p>
        Average Points: {averagePoints}
        </p>
        <p>
            Years Played: {yearsPlayed}
        </p>
        <p>
            Career Points: {careerPoints}
        </p>
        <p>
            Championships: {championships}
        </p>
        </div>
    )
}
export default Players;
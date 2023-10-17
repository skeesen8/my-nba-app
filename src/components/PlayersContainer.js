import React from "react";
import Players from "./Players";

function PlayersContainer({players}){
    const renderPlayers = players.map((playersObj) => {
        return(
            <Players
            key={playersObj.id}
            name={playersObj.name}
            yearsPlayed={playersObj.yearsPlayed}
            averagePoints={playersObj.averagePoints}
            careerPoints={playersObj.careerPoints}
            championships={playersObj.championships}
            pictureUrl={playersObj.pictureUrl}
            
            /> 
        )

    })
    return(
    <div>
       
           
    {renderPlayers}

       
    </div>
    )
}
export default PlayersContainer;
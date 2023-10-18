import React from "react";
import Players from "./Players";
import {useOutletContext} from "react-router-dom"

function PlayersContainer(){
    const {players} = useOutletContext()
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
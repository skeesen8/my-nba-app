import React from "react"; 

function Players({name,yearsPlayed,averagePoints,careerPoints,championships,pictureUrl}){
    return(
        <div>
        <p>
            {name}
            
        </p>
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
        <img src={pictureUrl} />
        </div>
    )
}
export default Players;
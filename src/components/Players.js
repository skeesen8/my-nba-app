import React from "react"; 

function Players({name,yearsPlayed,averagePoints,careerPoints,championships,pictureUrl}){
    return(
        <div>
        <p>
            name;{name}
            
        </p>
        <p>
        averagePoints;{averagePoints}
        </p>
        <p>
            yearsPlayed;{yearsPlayed}
        </p>
        <p>
            careerPoints;{careerPoints}
        </p>
        <p>
            championships{championships}
        </p>
        <img src={pictureUrl} />
        </div>
    )
}
export default Players;
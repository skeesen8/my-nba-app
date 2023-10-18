import React from "react";
import { useState } from "react";
import {useOutletContext} from "react-router-dom"
import {useNavigate} from "react-router-dom"
function Form(){
    const navigate=useNavigate()
    const {onNewLegend} = useOutletContext()
    const[formName,setFormName] = useState("")
    const[averagePoints,setAveragePoints]=useState("")
    const[yearsPlayed, setYearsPlayed]=useState("")
    const[careerPoints,setCareerPoints]=useState("")
    const[championships,setChampionships]=useState("")
    const[picture,setPicture]=useState("")

    function handlePicture(e){
        setPicture(e.target.value)
    }
    function handleChampionships(e){
        setChampionships(e.target.value)
    }
    function handleCareerPoints(e){
        setCareerPoints(e.target.value)
    }
    function handleYearsPlayed(e){
        setYearsPlayed(e.target.value)
    }
    function handleAvgPoints(e){
        setAveragePoints(e.target.value)
    }
    function handleNameChange(e){
        setFormName(e.target.value)
    } 

    function handleSubmit(e){
        e.preventDefault();
        const newLegend = {
            name:formName,
            yearsPlayed:yearsPlayed,
            averagePoints:averagePoints,
            careerPoints:careerPoints,
            championships:championships,
            pictureUrl:picture

        }
            
            fetch("http://localhost:8003/Legends",{
                method:"POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body:JSON.stringify(newLegend),
            })
            .then(response => response.json())
            .then(newLegendFromServer => onNewLegend(newLegendFromServer));
            navigate("/players")
        
    }
return(
    <form>
        <input
        
        value={formName}
        onChange={handleNameChange}
        placeholder="Full Name"
        type="text"
        name="name"
        />
        <input
        
        value={averagePoints}
        onChange={handleAvgPoints}
        placeholder="Average Points"
        type="text"
        name="averagePoints"
        />

        <input
        
        value={yearsPlayed}
        onChange={handleYearsPlayed}
        placeholder="Years Played"
        type="text"
        name="yearsPlayed"
        />      

        <input
        
        value={careerPoints}
        onChange={handleCareerPoints}
        placeholder="Career Points"
        type="text"
        name="careerPoints"
        />

        <input
        
        value={championships}
        onChange={handleChampionships}
        placeholder="Championships"
        type="text"
        name="championships"
        />

        <input
        
        value={picture}
        onChange={handlePicture}
        placeholder="Put Picture URL Here"
        type="text"
        name="pictureUrl"
        />

        <button type="submit" onClick={handleSubmit}>Create Legend</button>       
    
    </form>
    
)
}
export default Form
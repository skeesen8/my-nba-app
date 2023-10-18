import React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom"


function SearchBar({handleFilter}){
const [inputValue,setInputValue] = useState("")
const navigate=useNavigate()
function handleNavigate(){
  navigate("/players")
}
function handleSearch(e){
  setInputValue(e.target.value)
  handleFilter(e.target.value)
}
    return(
        <div className="search">
          <input type="text" className="searchTerm" value={inputValue} onChange={handleSearch}  />
          <button onClick={handleNavigate}>Search Legend</button>
      
    </div>
    )
} 
export default SearchBar
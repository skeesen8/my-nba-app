import React from "react";
import {useState} from "react";


function SearchBar({handleFilter}){
const [inputValue,setInputValue] = useState("")
function handleSearch(e){
  setInputValue(e.target.value)
  handleFilter(e.target.value)
}
    return(
        <div className="search">
          <h3>search bar</h3>
          <input type="text" className="searchTerm" value={inputValue} onChange={handleSearch}  />
      
    </div>
    )
} 
export default SearchBar
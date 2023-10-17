import PlayersContainer from './PlayersContainer';
import React, {useState,useEffect} from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from './Header';
import SearchBar from './SearchBar';
// import './data/index.css'; 





function App() {
  const [players, setPlayers ]=useState([])
  const [searchText,setSearchText]=useState("")

  function handleFilter(searchText){
    setSearchText(searchText)
  }

  console.log(searchText)

  const filteredPlayers = players.filter((newPlayers)=>{
    const playersToLowerCase = newPlayers.name.toLowerCase();
    const searchTextToLowerCase = searchText.toLowerCase();
    return(playersToLowerCase.includes(searchTextToLowerCase)

    )
  })

  useEffect(() => {
  fetch("http://localhost:8003/Legends")
  .then((resp) => resp.json())
  .then((playerData) => setPlayers(playerData))
},[])

  
  return (
    
    <div>
      <Header/>
      <SearchBar handleFilter={handleFilter}/>
      <PlayersContainer players={filteredPlayers}/>
    </div>
  );
}

export default App;

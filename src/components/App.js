import PlayersContainer from './PlayersContainer';
import React, {useState,useEffect} from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from './Header';
import SearchBar from './SearchBar';
import Form from './Form';
// import './data/index.css'; 


function App() {
  const [players, setPlayers ]=useState([])
  const [searchText,setSearchText]=useState("")
  // const [newLegend, setNewLegend]=useState("")

  function onNewLegend(createdLegend){
    setPlayers((currentLegends)=> [...currentLegends,createdLegend])
  }

  function handleFilter(searchText){
    setSearchText(searchText)
  }

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
      <Form onNewLegend={onNewLegend}/>
    </div>
  );
}

export default App;

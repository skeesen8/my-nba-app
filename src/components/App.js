import PlayersContainer from './PlayersContainer';
import React, {useState,useEffect} from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from './Header';
import SearchBar from './SearchBar';
// import './data/index.css'; 





function App() {
  const [players, setPlayers ]=useState([])
  useEffect(() => {
  fetch("http://localhost:8003/Legends")
  .then((resp) => resp.json())
  .then((playerData) => setPlayers(playerData))
},[])

  
  return (
    
    <div>
      <Header/>
      <SearchBar/>
      <PlayersContainer players={players}/>
    </div>
  );
}

export default App;

import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'


function App() {

  const [pokemon, setPokemon] = useState([])
  const [show, setShow] = useState(false)

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807").then(response => setPokemon(response.data.results)
    ).catch(err => console.log(err))
  }, [])

  const showPokemon = (e) => {
    setShow(!show)
    console.log(pokemon)
  }

  

  return (
    <div className="App">
      <button onClick={showPokemon}>See Pokemon</button>
      {show ? pokemon.map((item, i) => {return <div key={i}>{item.name}</div>}) : ""}
      {show ? <p>Heres some pokemon!</p> : <p>Hidden</p>}
    </div>
  );
}


export default App

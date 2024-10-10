import { useState } from "react"
import axios from "axios";
import { Pokemon } from "./components/Pokemon";

function App() {
  const [dataAPI, setDataAPI] = useState({});
  
  const POKEMON_API = "https://pokeapi.co/api/v2/pokemon"

function pokedata(){
    axios.get(POKEMON_API)
    .then(response => {
      setDataAPI(response.data)
      console.log(response.data)
    })
    .catch(error => {
      console.log("Error fetching data:",error)
    })
    
    
}


  return (
    <>
      <div>
        <Pokemon />
        <button onClick={pokedata}>Fetch Pokemon Data</button>
      </div>
    </>
  )
}

export default App

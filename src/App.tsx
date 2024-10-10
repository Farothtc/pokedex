import { useState } from "react"
import axios from "axios";

function App() {
  const [dataAPI, setDataAPI] = useState({});
  
  const POKEMON_API = "https://pokeapi.co/api/v2/pokemon"

async function pokedata(){
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
        <button onClick={pokedata}>Fetch Pokemon Data</button>
      </div>
    </>
  )
}

export default App

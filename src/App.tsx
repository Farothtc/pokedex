import { Pokemon } from "./components/Pokemon";
import axios from "axios";
import { useState } from "react";

function App() {
  const [dataAPI, setDataAPI] = useState([]);

  const POKEMON_API = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";

  function pokedata() {
    axios
      .get(POKEMON_API)
      .then((response) => {
        setDataAPI(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }

  const PokeData = dataAPI.map((e, index) => <Pokemon key={index} e={e} />);

  return (
    <>
      <div className="app--all">
        {PokeData}
        <button onClick={pokedata}>Fetch Pokemon Data</button>
      </div>
    </>
  );
}

export default App;

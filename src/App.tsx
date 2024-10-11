import { Pokemon } from "./components/Pokemon";
import axios from "axios";
import { useEffect, useState } from "react";
import PokeDataImages from "./lib/PokeDataImages";

function App() {
  const [dataAPI, setDataAPI] = useState([]);

  const POKEMON_API = "https://pokeapi.co/api/v2/pokemon?limit=6&offset=0";

  async function pokedata() {
    try {
      const response = await axios.get(POKEMON_API);
      setDataAPI(response.data.results);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }

  useEffect(() => {
    pokedata();
  }, []);

  const PokeData = dataAPI.map((e, index) => (
    <Pokemon key={index} e={e} img={PokeDataImages[index]} />
  ));

  return (
    <>
      <div className="container app--all">
        <div className="row">
          <h2 className="display-5 my-5 text-center">Pokedex</h2>
          {PokeData}
        </div>
      </div>
    </>
  );
}

export default App;

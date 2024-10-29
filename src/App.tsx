import { Pokemon } from "./components/Pokemon";
import axios from "axios";
import { useEffect, useState } from "react";
import PokeDataLib from "./lib/PokeDataLib";

function App() {
  const [dataAPI, setDataAPI] = useState([]);
  const [pokeSearch, setPokeSearch] = useState("");

  const POKEMON_API = "https://pokeapi.co/api/v2/pokemon?limit=9&offset=0";

  async function pokedata() {
    try {
      const response = await axios.get(POKEMON_API);
      setDataAPI(response.data.results);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }

  console.log(dataAPI);

  useEffect(() => {
    pokedata();
  }, []);

  const pokeFilter = dataAPI.filter((pokemonList: any) => {
    return pokemonList.name
      .toLowerCase()
      .includes(pokeSearch.toLocaleLowerCase());
  });

  const PokeData = pokeFilter.map((e, index) => (
    <Pokemon key={index} e={e} img={PokeDataLib[index]} />
  ));

  return (
    <>
      <div className="container app--all">
        <div className="row">
          <h2 className="display-5 my-5 text-center">Pokedex - 9</h2>
          <div className="col-md-12">
            <form action="#" className="text-center" id="search--form">
              <label htmlFor="name" className="me-2">
                Search Engine:
              </label>
              <input
                type="text"
                placeholder="Blastoise, Charizard, Charmander etc."
                name="PokemonName"
                className="form-control"
                value={pokeSearch}
                onChange={(el) => setPokeSearch(el.target.value)}
                autoComplete="off"
                id="search--form--input"
              />
            </form>
          </div>
          {PokeData}
        </div>
      </div>
    </>
  );
}

export default App;

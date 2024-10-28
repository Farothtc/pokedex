import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

type bulbo = {
  weight: number;
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
};

export const PokeStats = () => {
  const { pokemonName } = useParams();
  const location = useLocation();
  const { pokemonDataProps } = location.state || {};

  const [bulbo, setBulbo] = useState<bulbo | undefined>(undefined);

  const BULBO_API = "https://pokeapi.co/api/v2/pokemon/" + pokemonName;

  async function bulboData() {
    try {
      const response = await axios.get(BULBO_API);
      setBulbo(response.data);
      // console.log(bulbo);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }

  console.log(bulbo);

  useEffect(() => {
    bulboData();
  }, []);

  return (
    <div>
      <div className="container sing--poke--cont mt-5">
        <div className="row">
          <div className="col-12 d-flex justify-content-center mb-5 mt-2">
            <Link to={`/`}>
              <button className="btn btn-outline-dark">
                Return to Pokedex
              </button>
            </Link>
          </div>
          <div className="col-12 mb-5">
            <div className="card">
              <img
                src={pokemonDataProps.img}
                className="card-img-top border-bottom"
              />
              <div className="card-body">
                <div className="title--wrapper">
                  <h4 className="card-title">
                    {pokemonDataProps.name.charAt(0).toUpperCase() +
                      pokemonDataProps.name.slice(1)}
                  </h4>
                  <h5 className="card-title mt-2">
                    {Array.isArray(pokemonDataProps.pokeType) ? (
                      pokemonDataProps.pokeType.map(
                        (type: string, index: number) => (
                          <span
                            key={index}
                            className={`poke-type-${type.toLowerCase()}`}
                          >
                            {type}
                          </span>
                        )
                      )
                    ) : (
                      <span
                        className={`poke-type-${pokemonDataProps.pokeType.toLowerCase()}`}
                      >
                        {pokemonDataProps.pokeType}
                      </span>
                    )}
                  </h5>
                </div>
                <div className="card-text mt-5">
                  <p>
                    {bulbo
                      ? bulbo.stats[0].stat.name.charAt(0).toUpperCase() +
                        bulbo.stats[0].stat.name.slice(1) +
                        ":         " +
                        bulbo.stats[0].base_stat
                      : "Loading.."}
                  </p>
                  <p>
                    {bulbo
                      ? bulbo.stats[1].stat.name.charAt(0).toUpperCase() +
                        bulbo.stats[1].stat.name.slice(1) +
                        ":         " +
                        bulbo.stats[1].base_stat
                      : "Loading.."}
                  </p>
                  <p>
                    {bulbo
                      ? bulbo.stats[2].stat.name.charAt(0).toUpperCase() +
                        bulbo.stats[2].stat.name.slice(1) +
                        ":         " +
                        bulbo.stats[2].base_stat
                      : "Loading.."}
                  </p>
                  <p>
                    {bulbo
                      ? bulbo.stats[3].stat.name.charAt(0).toUpperCase() +
                        bulbo.stats[3].stat.name.slice(1) +
                        ":         " +
                        bulbo.stats[3].base_stat
                      : "Loading.."}
                  </p>
                  <p>
                    {bulbo
                      ? bulbo.stats[4].stat.name.charAt(0).toUpperCase() +
                        bulbo.stats[4].stat.name.slice(1) +
                        ":         " +
                        bulbo.stats[4].base_stat
                      : "Loading.."}
                  </p>
                  <p>
                    {bulbo
                      ? bulbo.stats[5].stat.name.charAt(0).toUpperCase() +
                        bulbo.stats[5].stat.name.slice(1) +
                        ":         " +
                        bulbo.stats[5].base_stat
                      : "Loading.."}
                  </p>
                  <p>Weight: {bulbo ? bulbo.weight : "Loading.."} </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

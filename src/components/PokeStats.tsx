import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

type bulbo = {
  weight: number;
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  };
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
          <div className="col-12">
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
                  <p>{bulbo ? bulbo.stats[0].stat.name : "Loading.."}</p>
                  <p>Weight: {bulbo ? bulbo.weight : "Loading.."} </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2>Welcome to PokeStats: {pokemonName}</h2>
    </div>
  );
};

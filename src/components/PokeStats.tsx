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
          <div className="col-md-12 d-flex justify-content-center mb-5 mt-2">
            <Link to={`/`}>
              <button className="btn btn-outline-dark">
                Return to Pokedex
              </button>
            </Link>
          </div>
          <div className="col-md-12 mb-5">
            <div className="card">
              <img
                src={pokemonDataProps.img}
                className="card-img-top border-bottom"
                id="poke--img"
              />
              <div className="card-body" id="poke--stats--body">
                <div className="title--wrapper--stats">
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
                  <div className="stats--wrapper border border-top mb-2">
                    <div className="ms-2">
                      {bulbo
                        ? bulbo.stats[0].stat.name.charAt(0).toUpperCase() +
                          bulbo.stats[0].stat.name.slice(1) +
                          ":         "
                        : "Loading.."}
                    </div>
                    <div
                      className="progress col-6"
                      role="progressbar"
                      aria-label="Example with label"
                      aria-valuenow={bulbo ? bulbo.stats[0].base_stat : 0}
                      aria-valuemin={0}
                      aria-valuemax={10}
                    >
                      <div
                        className="progress-bar bg-success"
                        style={{
                          width: `${bulbo ? bulbo.stats[0].base_stat : 0}%`,
                        }}
                      >
                        {bulbo ? bulbo.stats[0].base_stat : 0}
                      </div>
                    </div>
                  </div>

                  <div className="stats--wrapper border border-top mb-2">
                    <div className="ms-2">
                      {bulbo
                        ? bulbo.stats[1].stat.name.charAt(0).toUpperCase() +
                          bulbo.stats[1].stat.name.slice(1) +
                          ":         "
                        : "Loading.."}
                    </div>
                    <div
                      className="progress col-6"
                      role="progressbar"
                      aria-label="Example with label"
                      aria-valuenow={bulbo ? bulbo.stats[1].base_stat : 0}
                      aria-valuemin={0}
                      aria-valuemax={10}
                    >
                      <div
                        className="progress-bar bg-danger"
                        style={{
                          width: `${bulbo ? bulbo.stats[1].base_stat : 0}%`,
                        }}
                      >
                        {bulbo ? bulbo.stats[1].base_stat : 0}
                      </div>
                    </div>
                  </div>

                  <div className="stats--wrapper border border-top mb-2">
                    <div className="ms-2">
                      {bulbo
                        ? bulbo.stats[2].stat.name.charAt(0).toUpperCase() +
                          bulbo.stats[2].stat.name.slice(1) +
                          ":         "
                        : "Loading.."}
                    </div>
                    <div
                      className="progress col-6"
                      role="progressbar"
                      aria-label="Example with label"
                      aria-valuenow={bulbo ? bulbo.stats[2].base_stat : 0}
                      aria-valuemin={0}
                      aria-valuemax={10}
                    >
                      <div
                        className="progress-bar bg-warning"
                        style={{
                          width: `${bulbo ? bulbo.stats[2].base_stat : 0}%`,
                        }}
                      >
                        {bulbo ? bulbo.stats[2].base_stat : 0}
                      </div>
                    </div>
                  </div>

                  <div className="stats--wrapper border border-top mb-2">
                    <div className="ms-2">
                      {bulbo
                        ? bulbo.stats[3].stat.name.charAt(0).toUpperCase() +
                          bulbo.stats[3].stat.name.slice(1) +
                          ":         "
                        : "Loading.."}
                    </div>
                    <div
                      className="progress col-6"
                      role="progressbar"
                      aria-label="Example with label"
                      aria-valuenow={bulbo ? bulbo.stats[3].base_stat : 0}
                      aria-valuemin={0}
                      aria-valuemax={10}
                    >
                      <div
                        className="progress-bar bg-dark"
                        style={{
                          width: `${bulbo ? bulbo.stats[3].base_stat : 0}%`,
                        }}
                      >
                        {bulbo ? bulbo.stats[3].base_stat : 0}
                      </div>
                    </div>
                  </div>

                  <div className="stats--wrapper border border-top mb-2">
                    <div className="ms-2">
                      {bulbo
                        ? bulbo.stats[4].stat.name.charAt(0).toUpperCase() +
                          bulbo.stats[4].stat.name.slice(1) +
                          ":         "
                        : "Loading.."}
                    </div>
                    <div
                      className="progress col-6"
                      role="progressbar"
                      aria-label="Example with label"
                      aria-valuenow={bulbo ? bulbo.stats[4].base_stat : 0}
                      aria-valuemin={0}
                      aria-valuemax={10}
                    >
                      <div
                        className="progress-bar bg-info"
                        style={{
                          width: `${bulbo ? bulbo.stats[4].base_stat : 0}%`,
                        }}
                      >
                        {bulbo ? bulbo.stats[4].base_stat : 0}
                      </div>
                    </div>
                  </div>

                  <div className="stats--wrapper border border-top mb-2">
                    <div className="ms-2">
                      {bulbo
                        ? bulbo.stats[5].stat.name.charAt(0).toUpperCase() +
                          bulbo.stats[5].stat.name.slice(1) +
                          ":         "
                        : "Loading.."}
                    </div>
                    <div
                      className="progress col-6"
                      role="progressbar"
                      aria-label="Example with label"
                      aria-valuenow={bulbo ? bulbo.stats[5].base_stat : 0}
                      aria-valuemin={0}
                      aria-valuemax={10}
                    >
                      <div
                        className="progress-bar bg-primary"
                        style={{
                          width: `${bulbo ? bulbo.stats[5].base_stat : 0}%`,
                        }}
                      >
                        {bulbo ? bulbo.stats[5].base_stat : 0}
                      </div>
                    </div>
                  </div>

                  <div className="stats--wrapper border border-top mb-2">
                    <div className="ms-2">Weight:</div>
                    <div
                      className="progress col-6"
                      role="progressbar"
                      aria-label="Example with label"
                      aria-valuenow={bulbo ? bulbo.weight : 0}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <div
                        className="progress-bar bg-secondary"
                        style={{
                          width: `${
                            bulbo && bulbo.weight < 100
                              ? bulbo
                                ? bulbo.weight
                                : 0
                              : Math.ceil(bulbo ? bulbo.weight / 10 : 0)
                          }%`,
                        }}
                      >
                        {bulbo ? bulbo.weight : 0}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

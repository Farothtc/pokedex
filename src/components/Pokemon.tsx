import { Link } from "react-router-dom";

type PokemonDataProps = {
  e: {
    name: string;
    url: string;
  };
  img: {
    id: number;
    name: string;
    img: string;
    pokeType: string | string[];
  };
};

export function Pokemon({ e, img }: PokemonDataProps) {
  return (
    <div className="col-md-4 my-5 poke--card">
      <div className="card">
        <div className="card-body" id="pokemeon--card--body">
          <div className="title--wrapper">
            <h4 className="card-title">
              <Link
                to={`/${e.name}`}
                state={{
                  pokemonDataProps: {
                    name: e.name,
                    img: img.img,
                    pokeType: img.pokeType,
                  },
                }}
              >
                {e.name.charAt(0).toUpperCase() + e.name.slice(1)}
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

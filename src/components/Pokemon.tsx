import { Link } from "react-router-dom";

type PokemonDataProps = {
  e: {
    name: string;
    url: string;
  };
  img: {
    id: number;
    img: string;
    pokeType: string | string[];
  };
};

export function Pokemon({ e, img }: PokemonDataProps) {
  // const [bulbo, setBulbo] = useState([]);

  // const BULBO_API = "https://pokeapi.co/api/v2/pokemon/bulbasaur";

  // async function bulboData() {
  //   try {
  //     const response = await axios.get(BULBO_API);
  //     setBulbo(response.data);
  //     // console.log(bulbo);
  //   } catch (error) {
  //     console.log("Error fetching data:", error);
  //   }
  // }

  // console.log(bulbo);

  // useEffect(() => {
  //   bulboData();
  // }, []);

  return (
    <div className="col-4 my-5 poke--card">
      <div className="card">
        <Link to={`/pokestats/${e.name}`}>
          <img src={img.img} className="card-img-top border-bottom" />
        </Link>
        <div className="card-body">
          <div className="title--wrapper">
            <h4 className="card-title">
              <Link to={`/pokestats/${e.name}`}>
                {e.name.charAt(0).toUpperCase() + e.name.slice(1)}
              </Link>
            </h4>
            <h5 className="card-title mt-2">
              {Array.isArray(img.pokeType) ? (
                img.pokeType.map((type, index) => (
                  <span
                    key={index}
                    className={`poke-type-${type.toLowerCase()}`}
                  >
                    {type}
                  </span>
                ))
              ) : (
                <span className={`poke-type-${img.pokeType.toLowerCase()}`}>
                  {img.pokeType}
                </span>
              )}
            </h5>
          </div>
          <div className="card-text mt-5">
            <p>Weight:</p>
          </div>
        </div>
      </div>
    </div>
  );
}

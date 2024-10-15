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
  return (
    <div className="col-4 my-5 poke--card">
      <div className="card">
        <img src={img.img} className="card-img-top border-bottom" />
        <div className="card-body">
          <div className="title--wrapper">
            <h5 className="card-title">
              {e.name.charAt(0).toUpperCase() + e.name.slice(1)}
            </h5>
            <h5 className="card-title">
              {Array.isArray(img.pokeType)
                ? img.pokeType.length > 1
                  ? img.pokeType[0] + "  " + img.pokeType[1]
                  : img.pokeType[0]
                : img.pokeType}
            </h5>
          </div>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
}

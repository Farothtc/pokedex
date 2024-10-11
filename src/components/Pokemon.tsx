type PokemonDataProps = {
  e: {
    name: string;
    url: string;
  };
  img: {
    id: number;
    img: string;
  };
};

export function Pokemon({ e, img }: PokemonDataProps) {
  return (
    <div className="col-3 my-5 poke--card">
      <div className="card">
        <img alt={"Picture of " + e.name} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{e.name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
}

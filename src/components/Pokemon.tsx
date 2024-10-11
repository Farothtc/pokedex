interface PokemonProps {
  e: {
    name: string;
    url: string;
  };
}

export function Pokemon({ e }: PokemonProps) {
  return (
    <div className="col-3 my-5 poke--card">
      <h2>{e.name}</h2>
    </div>
  );
}

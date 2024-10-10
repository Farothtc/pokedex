interface PokemonProps {
  e: {
    name: string;
    url: string;
  };
}

export function Pokemon({ e }: PokemonProps) {
  return (
    <div className="poke--all">
      <h2>Hi I am {e.name}</h2>
    </div>
  );
}

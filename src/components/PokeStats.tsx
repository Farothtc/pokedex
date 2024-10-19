import { useParams } from "react-router-dom";

export const PokeStats = () => {
  const { pokemonName } = useParams();

  return (
    <div>
      <h2>Welcome to PokeStats: {pokemonName}</h2>
    </div>
  );
};

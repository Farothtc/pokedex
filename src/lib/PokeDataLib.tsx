type PokemonType = {
  id: number;
  name: string;
  img: string;
  pokeType: string | string[];
};
const PokeDataLib: PokemonType[] = [
  {
    id: 0,
    name: "bulbasaur",
    img: "/bulbasaur.png",
    pokeType: ["Grass", "Poison"],
  },
  {
    id: 1,
    name: "ivysaur",
    img: "/ivysaur.jpg",
    pokeType: ["Grass", "Poison"],
  },
  {
    id: 2,
    name: "venusaur",
    img: "/venusaur.png",
    pokeType: ["Grass", "Poison"],
  },
  {
    id: 3,
    name: "charmander",
    img: "/charmender.png",
    pokeType: "Fire",
  },
  {
    id: 4,
    name: "charmeleon",
    img: "/charmelon.png",
    pokeType: "Fire",
  },
  {
    id: 5,
    name: "charizard",
    img: "/charizard.png",
    pokeType: ["Fire", "Flying"],
  },
  {
    id: 6,
    name: "squirtle",
    img: "/squirtle.png",
    pokeType: "Water",
  },
  {
    id: 7,
    name: "wartortle",
    img: "/wartotile.png",
    pokeType: "Water",
  },
  {
    id: 8,
    name: "blastoise",
    img: "/blastosite.png",
    pokeType: "Water",
  },
  {
    id: 9,
    name: "caterpie",
    img: "/caterpie.png",
    pokeType: "Bug",
  },
  {
    id: 10,
    name: "metapod",
    img: "/metapod.png",
    pokeType: "Bug",
  },
  {
    id: 11,
    name: "butterfree",
    img: "/butterfree.png",
    pokeType: ["Bug", "Flying"],
  },
  {
    id: 12,
    name: "weedle",
    img: "/weedle.png",
    pokeType: ["Bug", "Poison"],
  },
  {
    id: 13,
    name: "kakuna",
    img: "/kakuna.png",
    pokeType: ["Bug", "Poison"],
  },
  {
    id: 14,
    name: "beedrill",
    img: "/beedrill.png",
    pokeType: ["Bug", "Poison"],
  },
];

export default PokeDataLib;

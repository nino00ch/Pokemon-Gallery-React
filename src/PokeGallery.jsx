import React from "react";
import Pokemon from "./Pokemon";
import Bulbasaur from "./assets/Bulbasaur.jpg";
import Charmander from "./assets/Charmander.jpg";
import Squirtle from "./assets/Squirtle.jpg";
import Pikachu from "./assets/Pikachu.jpg";
import Jigglypuff from "./assets/Jigglypuff.jpg";
import Meowth from "./assets/Meowth.jpg";
import Psyduck from "./assets/Psyduck.jpg";
import Machop from "./assets/Machop.jpg";
import Geodude from "./assets/Geodude.jpg";
import Gastly from "./assets/Gastly.jpg";
import Eevee from "./assets/Eevee.jpg";
import Snorlax from "./assets/Snorlax.jpg";

const PokeGallery = () => {
  const pokemonList = [
    { name: "Bulbasaur", image: Bulbasaur, types: ["Grass", "Poison"] },
    { name: "Charmander", image: Charmander, types: ["Fire"] },
    { name: "Squirtle", image: Squirtle, types: ["Water"] },
    { name: "Pikachu", image: Pikachu, types: ["Electric"] },
    { name: "Jigglypuff", image: Jigglypuff, types: ["Normal", "Fairy"] },
    { name: "Meowth", image: Meowth, types: ["Normal"] },
    { name: "Psyduck", image: Psyduck, types: ["Water"] },
    { name: "Machop", image: Machop, types: ["Fighting"] },
    { name: "Geodude", image: Geodude, types: ["Rock", "Ground"] },
    { name: "Gastly", image: Gastly, types: ["Ghost", "Poison"] },
    { name: "Eevee", image: Eevee, types: ["Normal"] },
    { name: "Snorlax", image: Snorlax, types: ["Normal"] },
  ];

  return (
    <div className="poke-gallery">
      {pokemonList.map((pokemon, index) => (
        <Pokemon
          key={index}
          name={pokemon.name}
          image={pokemon.image}
          types={pokemon.types}
        />
      ))}
    </div>
  );
};

export default PokeGallery;

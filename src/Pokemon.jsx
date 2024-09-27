import React from "react";

const Pokemon = ({ name, image, types }) => {
  return (
    <div className="pokemon-card">
      <img src={image} alt={name} className="pokemon-image" />
      <h2>{name}</h2>
      <p>Types: {types.join(", ")}</p>
    </div>
  );
};

export default Pokemon;

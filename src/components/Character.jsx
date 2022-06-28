import React from "react";

export default function Character({character}) {
  return (
    <div>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
    </div>
  );
}

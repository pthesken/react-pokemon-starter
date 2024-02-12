import { useState } from "react";
import PokemonCard from "./PokemonCard";
import pokidex from "./pokemon";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="main-container">
      <h1 className="page-header">React Pokidex</h1>

      <div className="pokemon-cards-container">
        {pokidex &&
          pokidex.map((pokemon) => {
            return (
              <PokemonCard
                name={pokemon.name}
                icon={pokemon.icon}
                typeIcon={pokemon.typeIcon}
              />
            );
          })}
      </div>
    </main>
  );
}

export default App;

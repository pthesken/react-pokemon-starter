import { useState } from "react";
import PokemonCard from "./PokemonCard";
import pokidexEntries from "./pokemon";
import "./App.css";
import { PokemonDetails } from "./PokemonDetails";

function App() {
  const [pokidex, setPokidex] = useState(pokidexEntries);
  const [selectedPokemon, setSelectedPokemon] = useState(pokidex[3]);

  return (
    <main className="main-container">
      <h1 className="page-header">React Pokidex</h1>

      {/* <PokemonDetails icon={pokidex[1].icon} /> */}
      <div className="selected-pokemon">
        {selectedPokemon && (
          <PokemonDetails
            name={selectedPokemon.name}
            icon={selectedPokemon.icon}
            typeIcon={selectedPokemon.typeIcon}
            description={selectedPokemon.description}
          />
        )}
      </div>

      <div className="pokemon-cards-container">
        {pokidex &&
          pokidex.map((pokemon) => {
            return (
              <PokemonCard
                onClickHandler={() => {
                  setSelectedPokemon(pokemon);
                }}
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

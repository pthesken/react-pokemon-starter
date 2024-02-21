import { useState } from "react";
import pokidexEntries from "./pokemon";
import "./App.css";
import { PokemonDetails } from "./components/PokemonDetails";
import PokemonCardCollection from "./components/PokemonCardCollection";

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
      <PokemonCardCollection
        pokidex={pokidex}
        onPokemonCardClick={setSelectedPokemon}
      />
    </main>
  );
}

export default App;

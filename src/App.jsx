import { useState } from "react";
import PokemonCard from "./PokemonCard";
import pokemon from "./pokemon";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="main-container">
      <h1 className="page-header">React Pokidex</h1>

      <PokemonCard
        name={pokemon[0].name}
        icon={pokemon[0].icon}
        typeIcon={pokemon[0].typeIcon}
      />
      <PokemonCard
        name={pokemon[1].name}
        icon={pokemon[1].icon}
        typeIcon={pokemon[1].typeIcon}
      />
    </main>
  );
}

export default App;

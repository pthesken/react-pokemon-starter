export function PokemonDetails({ name, icon, typeIcon, description }) {
  return (
    <div className="pokemon-details">
      <img src={icon} alt="" />
      <h1>{name}</h1>
      <h1>{description}</h1>
      <img src={typeIcon} alt="" />
    </div>
  );
}

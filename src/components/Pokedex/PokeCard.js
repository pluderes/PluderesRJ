import "./PokeCard.scss";
import { Link } from "react-router-dom";

function PokeCard({ pokemonName }) {
  return (
    <div className="PokeCard">
      {/* <a
        href={`https://www.pokemon.com/us/pokedex/${pokemonName}`}
        target="_blank"
        rel="noreferrer"
      > */}
      {/* <Link to={`https://www.pokemon.com/us/pokedex/${pokemonName}`}> */}
      <div className="PokeCard__img">
        <img
          alt="pokemon"
          src={`https://img.pokemondb.net/artwork/large/${pokemonName}.jpg`}
        />
      </div>
      <div className="PokeCard__name">
        <h2>{pokemonName.toUpperCase()}</h2>
      </div>
      {/* </Link> */}

      {/* </a> */}
    </div>
  );
}

export default PokeCard;

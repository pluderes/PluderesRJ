import { useEffect, useState } from "react";
import { apiClient } from "../../helper/api_client";
import "./PokeMain.scss";
import PokeCard from "./PokeCard";
import Pagi from "../common/CustomPagination";

function PokedexMain() {
  const [pokedex, setPokedex] = useState([]);
  useEffect(() => {
    apiClient.get(`pokemon?limit=5`).then((response) => {
      const { results } = response.data;
      setPokedex(results);
    });
  }, []);

  console.log("-----", pokedex);

  return (
    <div className="PokedexMain">
      <div className="PokedexMain__content">
        {pokedex.map((pokemon) => {
          const { name } = pokemon;
          return (
            <div className="PokedexMain__content__card">
              <PokeCard pokemonName={name} />
            </div>
          );
        })}
      </div>
      <div className="PokedexMain__footer">
        <Pagi total={100} />
      </div>
    </div>
  );
}

export default PokedexMain;

import React, { useState } from "react";
import axios from "axios";
import styles from "./Pokemon.module.css";

function Pokemon() {
  const [pokemons, setPokemons] = useState([]);

  function getPokemon() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=807")
      .then(response => {
        setPokemons(response.data.results);
      })
      .catch(console.log);
  }

  return (
    <div>
      <button onClick={getPokemon} className={styles.fetchBtn}>
        FETCH POKEMON
      </button>
      {pokemons.map((pokemon, i) => (
        <div key={i} className={styles.pokemonChars}>
          <p>{pokemon.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Pokemon;

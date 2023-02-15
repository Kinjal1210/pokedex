import React, { useState, useEffect } from "react";
import { Header, PokeCard } from "./components";
import { filterPokemon, getTypes } from "./components/helperFxns";
import "./components/style.css";
import "./App.css";

function App() {
  const [allPokeArr, setAllPokeArr] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [pokeName, setPokeName] = useState("");
  const [pokeType, setPokeType] = useState("");

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
    )
      .then((response) => response.json())
      .then((data) => setAllPokeArr(data.pokemon))
      .catch((error) => console.error(error));
  }, []);

  const types = getTypes(allPokeArr);
  const filteredPoke = filterPokemon(allPokeArr, pokeName, pokeType,);
  const filteredSearch = filteredPoke.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchInput.toLowerCase()) ||
    pokemon.type.includes(searchInput) ||
    pokemon.weaknesses.includes(searchInput)
  );

  return (
    <div className="page-container">
      <Header />
      <div className="filters-container">
        <div className="search-container">
          <label htmlFor="searchInput">Search</label>
          <input
            type="text"
            id="searchInput"
            value={searchInput}
            placeholder="Search by name, type or weakness"
            onChange={(event) => setSearchInput(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="nameSelect">Select by Pokemon</label>
          <select
            id="nameSelect"
            value={pokeName}
            onChange={(event) => setPokeName(event.target.value)}
          >
            <option value="">--Select an Option--</option>
            {allPokeArr.map((pokemon) => (
              <option key={pokemon.id} value={pokemon.name}>
                {pokemon.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="typeSelect">Select by Type</label>
          <select
            id="typeSelect"
            value={pokeType}
            onChange={(event) => setPokeType(event.target.value)}
          >
            <option value="">--Select an Option--</option>
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>
      <ol className="pokemon-tile-container">
        {filteredSearch.length > 0 ? (
          filteredSearch.map((pokemon) => (
            <PokeCard
              key={pokemon.id}
              pokeName={pokemon.name}
              pokeNum={pokemon.num}
              pokeType={pokemon.type}
              pokeWeak={pokemon.weaknesses}
              pokeImg={pokemon.img}
            />
          ))
        ) : (
          <h1>No Match Found</h1>
        )}
      </ol>
    </div>
  );
}

export default App;

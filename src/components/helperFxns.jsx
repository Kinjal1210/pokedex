function filterPokemon(allPokeArr, pokeName = "", pokeType = "", pokeWeak = "") {
  let filteredPokemon = [];

  if (allPokeArr) {
    filteredPokemon = allPokeArr; //starts filter process with the entire pokemon array
    
    if (pokeName) {
      //filters to the pokemon with the selected pokeName** most specific
      filteredPokemon = filteredPokemon.filter((ele) => {
        return ele.name === pokeName;
      });
    }

    if (pokeType) {
      //filters to see if pokemon type includes the selected type. Types are a nested array on the filtered arr so check for includes
      filteredPokemon = filteredPokemon.filter((ele) => {
        return ele.type.includes(pokeType);
      });
    }
    if (pokeWeak) {
      //Same filter to check for weaknesses
      filteredPokemon = filteredPokemon.filter((ele) => {
        return ele.weaknesses.includes(pokeWeak);
      });
    }
    
  return filteredPokemon; 
  }
// return filteredPokemon; //returns empty arr if no conditions are chosen, defaulting card build to full array
}

function getTypes(allPokeArr) {
  const typeArr = [];
  allPokeArr.map((ele) => {
    ele.type.map((e) => {
      if (!typeArr.includes(e)) {
        typeArr.push(e);
      }
    });
  });
  return typeArr;
}

export { getTypes, filterPokemon };

export {getPokemon, getType};

const BASE_URL = 'https://pokeapi.co/api/v2';

function getPokemon(pokemon) {
  if (!pokemon) return;
  pokemon = pokemon.toLowerCase();
  const url = `${BASE_URL}/pokemon/${pokemon}`;
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch(err => {
      console.error(err);
      alert('Error. Please provide a valid Pokemon name.');
      return fetch(`${BASE_URL}/pokemon/charizard`)
        .then(response => response.json())
        .then(data => {
          return data;
        })
    })
}

function getType(type) {
  if (!type) return;
  const url = `${BASE_URL}/type/${type}`;
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch(err => {
      console.error(err);
      alert('Error. Please provide a valid Type name.');
      return fetch(`${BASE_URL}/type/electric`)
        .then(response => response.json())
        .then(data => {
          return data;
        })
    })
}
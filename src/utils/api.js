import axios from 'axios';

export {getPokemon};

const BASE_URL = 'https://pokeapi.co/api/v2';

function getPokemon(pokemon) {
  pokemon = pokemon.toLowerCase();
  const url = `${BASE_URL}/pokemon/${pokemon}`;
  return axios.get(url)
    .then(res => {
      const pData = res.data;
      return pData
    })
    .catch(err => {
      alert('Error. Please provide a valid Pokemon name.');
      return axios.get(`${BASE_URL}`);
    })
}
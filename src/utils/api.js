import axios from 'axios';

export {getPokemon};

const BASE_URL = 'https://pokeapi.co/api/v2';

function getPokemon(pokemon) {
  const url = `${BASE_URL}/pokemon/${pokemon}`;
  return axios.get(url)
    .then(res => {
      const pData = res.data;
      return pData
    });
}
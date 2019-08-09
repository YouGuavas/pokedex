import axios from 'axios';

export {getPokemon, getRegion};

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
      return axios.get(`${BASE_URL}/pokemon/charizard`);
    })
}

function getRegion(region) {
  const url = `${BASE_URL}/region/${region}`;
  return axios.get(url)
    .then(res => {
      const rData = res.data;
      return rData;
    })
    .catch(err => {
      console.log(err);
      alert('Error. Please provide a valid Region name.');
      return axios.get(`${BASE_URL}/region/kanto`);
    })
}
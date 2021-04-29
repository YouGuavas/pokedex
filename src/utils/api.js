export {search};

const BASE_URL = 'https://pokeapi.co/api/v2';

function search(searchTerm, searchType='pokemon') {
  if (!searchTerm) return;
  let types;
  return fetch(`${BASE_URL}/type`)
    .then(response => response.json())
    .then(data => {
      data = data.results.map((item) => {
        return item.name;
      });
      types = data;
      return data
    })
    .then(() => {
      if (types.includes(searchTerm)) {
        searchType = 'type';
      } else {
        searchType = 'pokemon';
        searchTerm = searchTerm.toLowerCase();
      }
      const url = `${BASE_URL}/${searchType}/${searchTerm}`;
      return fetch(url)
        .then(response => response.json())
        .then(data => {
          return {data, searchType};
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
      })
}
export const requestAll = async () => {
  const maxPokemons = 251
  const api = "https://pokeapi.co/api/v2/pokemon";
  const response = await fetch(`${api}/?limit=${maxPokemons}`);
  return await response.json();
};

export const requestId = async (id) => {
  const api = "https://pokeapi.co/api/v2/pokemon";
  const response = await fetch(`${api}/${id}`);
  return await response.json();
};

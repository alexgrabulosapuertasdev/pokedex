const API_URL = 'https://pokeapi.co/api/v2/pokemon';
const NUM_POKEMON = 151;

export async function getPokemons() {
    const pokemons = [];
    for(let i = 1; i <= NUM_POKEMON; i++) {
        pokemons.push(await getPokemonById(i));
    }
    return pokemons;
}

function getPokemonById(id) {
    return fetch(`${API_URL}/${id}`)
        .then(res => res.json());
}

export function postStoredPokemon(pokemonData) {
	localStorage.setItem("allPokemon", JSON.stringify(pokemonData));
}

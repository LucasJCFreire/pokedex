export function putStoredPokemon(pokemonData) {
	localStorage.setItem("allPokemon", JSON.stringify(pokemonData));
}

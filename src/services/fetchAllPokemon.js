import { fetchPokemonDetails } from "./fetchPokemonDetails";
import { postStoredPokemon } from "./postLocalStorage";

export async function fetchAllPokemon() {
	const allPokemon = [];
	let url = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";

	while (url) {
		const response = await fetch(url);
		const data = await response.json();
		const pokemonsWithDetails = await Promise.all(
			data.results.map(async (pokemon) => {
				const pokemonDetails = await fetchPokemonDetails(pokemon.url);
				return pokemonDetails;
			}),
		);

		allPokemon.push(...pokemonsWithDetails);
		url = data.next;
	}

	postStoredPokemon(allPokemon);

	return allPokemon;
}

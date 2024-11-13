export function addNewPokemon(newPokemon) {
	const pokemons = JSON.parse(localStorage.getItem("allPokemon")) || [];
	const lastNumber = pokemons.length > 0 ? pokemons[pokemons.length - 1].number : 0;
	const newNumber = lastNumber + 1;

	const updatedPokemon = { ...newPokemon, number: newNumber };
	pokemons.push(updatedPokemon);
	localStorage.setItem("allPokemon", JSON.stringify(pokemons));

	return { message: `Novo Pokémon salvo com o número ${newNumber}` };
}

export function searchPokemon(query) {
	const pokemons = JSON.parse(localStorage.getItem("allPokemon")) || [];
	return pokemons.find((pokemon) => pokemon.name.toLowerCase().includes(query.toLowerCase()));
}

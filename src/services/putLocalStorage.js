import { getStoredPokemon } from "./getLocalStorage";

export function putLocalStorage(newPokemon) {
	const pokemons = getStoredPokemon();
	const lastNumber = pokemons.length > 0 ? pokemons[pokemons.length - 1].number : 0;
	const newNumber = lastNumber + 1;

	const updatedPokemon = { ...newPokemon, number: newNumber };
	pokemons.push(updatedPokemon);

	localStorage.setItem("allPokemon", JSON.stringify(pokemons));

	return newNumber;
}

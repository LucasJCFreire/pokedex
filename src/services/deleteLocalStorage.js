export function deleteLocalStorage(id) {
	try {
		const storedPokemon = JSON.parse(localStorage.getItem("allPokemon") || "[]");
		const updatedPokemon = storedPokemon.filter((pokemon) => pokemon.number.toString() !== id);
		localStorage.setItem("allPokemon", JSON.stringify(updatedPokemon));
	} catch (error) {
		console.error("Erro ao deletar no localStorage:", error);
	}
}

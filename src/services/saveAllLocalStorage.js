export function saveAllLocalStorage(id, updatedData) {
	try {
		const storedPokemon = JSON.parse(localStorage.getItem("allPokemon") || "[]");
		const updatedPokemon = storedPokemon.map((pokemon) =>
			pokemon.number.toString() === id ? { ...pokemon, ...updatedData } : pokemon,
		);
		localStorage.setItem("allPokemon", JSON.stringify(updatedPokemon));
		return updatedData;
	} catch (error) {
		console.error("Erro ao editar o localStorage:", error);
	}
}

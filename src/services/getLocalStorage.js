export function getStoredPokemon() {
	return JSON.parse(localStorage.getItem("allPokemon") || "[]");
}

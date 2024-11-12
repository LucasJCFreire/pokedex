export async function fetchPokemonDetails(url) {
	const response = await fetch(url);
	const data = await response.json();

	const pokemon = {
		number: data.id,
		name: data.name,
		types: data.types.map((type) => type.type.name),
		image: data.sprites.other["official-artwork"].front_default,
	};

	return pokemon;
}

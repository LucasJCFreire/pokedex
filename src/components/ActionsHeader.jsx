import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import styled from "styled-components";
import { putLocalStorage } from "../services/putLocalStorage";
import Btn from "./Btn";
import ModalAdd from "./ModalAdd";
import ModalSearch from "./ModalSearch";
import SavedPokemonMessage from "./SavedPokemonMessage";

export default function ActionsHeader() {
	const [showAddModal, setShowAddModal] = useState(false);
	const [showSearchModal, setShowSearchModal] = useState(false);
	const [newPokemon, setNewPokemon] = useState({
		name: "",
		number: 0,
		types: [],
		image: "/default-image.png",
	});
	const [searchedPokemon, setSearchedPokemon] = useState(null);
	const [isSearching, setIsSearching] = useState(false);
	const [savedPokemonMessage, setSavedPokemonMessage] = useState("");
	const [savedPokemonNumber, setSavedPokemonNumber] = useState(0);

	const handleAddPokemon = () => {
		setNewPokemon({
			name: "",
			number: 0,
			types: [],
			image: "/default-image.png",
		});
		setShowAddModal(true);
	};

	const handleSaveNewPokemon = () => {
		const pokemonToSave = {
			...newPokemon,
			image: newPokemon.image || "/default-image.png",
		};

		const newNumber = putLocalStorage(pokemonToSave);
		setSavedPokemonMessage(pokemonToSave.name);
		setSavedPokemonNumber(newNumber);
		setShowAddModal(false);
	};

	const handleSearchPokemon = () => {
		setShowSearchModal(true);
	};

	const handleSearchSubmit = (name) => {
		setIsSearching(true);
		const pokemons = JSON.parse(localStorage.getItem("allPokemon")) || [];
		const foundPokemon = pokemons.find((pokemon) =>
			pokemon.name.toLowerCase().includes(name.toLowerCase()),
		);
		setSearchedPokemon(foundPokemon);
		setIsSearching(false);
	};

	const handleCloseSearchModal = () => {
		setSearchedPokemon(null);
		setIsSearching(false);
		setShowSearchModal(false);
	};

	return (
		<StyledDiv>
			<Btn icon={<IoIosAddCircle />} text="Adicionar" handleClick={handleAddPokemon} />
			<Btn icon={<FaSearch />} text="Buscar" handleClick={handleSearchPokemon} />

			<ModalAdd
				show={showAddModal}
				onClose={() => setShowAddModal(false)}
				newPokemon={newPokemon}
				setNewPokemon={setNewPokemon}
				onSave={handleSaveNewPokemon}
			/>

			<ModalSearch
				show={showSearchModal}
				onClose={handleCloseSearchModal}
				onSearch={handleSearchSubmit}
				searchedPokemon={searchedPokemon}
				isSearching={isSearching}
			/>

			<SavedPokemonMessage
				pokemonName={savedPokemonMessage}
				pokemonNumber={savedPokemonNumber}
				onClose={() => {
					setSavedPokemonMessage("");
					setSavedPokemonNumber(0);
				}}
			/>
		</StyledDiv>
	);
}

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  width: 160px;
`;

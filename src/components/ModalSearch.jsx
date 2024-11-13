import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ModalSearch = ({ show, onClose, onSearch, searchedPokemon, isSearching }) => {
	const [searchInput, setSearchInput] = useState("");

	const handleSearchSubmit = () => {
		onSearch(searchInput);
		setSearchInput("");
	};

	if (!show) return null;

	return (
		<ModalOverlay onClick={onClose}>
			<ModalContent onClick={(e) => e.stopPropagation()}>
				<h3>Buscar Pokémon</h3>
				<input
					type="text"
					placeholder="Nome do Pokémon"
					value={searchInput}
					onChange={(e) => setSearchInput(e.target.value)}
				/>
				<button type="button" onClick={handleSearchSubmit}>
					{isSearching ? "Carregando..." : "Buscar"}
				</button>
				<button type="button" onClick={onClose}>
					Cancelar
				</button>

				{searchedPokemon && (
					<ResultContainer>
						<h4>Resultado da Busca:</h4>
						<ResultList>
							<ResultItem>
								<div className="pokemonImage">
									<img src={searchedPokemon.image} alt={searchedPokemon.name} />
								</div>
								<div className="pokemonDetails">
									<p>
										<strong>{searchedPokemon.name}</strong>
									</p>
									<p>Número: {searchedPokemon.number}</p>
									<Link to={`/description/${searchedPokemon.number}`} onClick={onClose}>
										Ver Descrição
									</Link>
								</div>
							</ResultItem>
						</ResultList>
					</ResultContainer>
				)}
			</ModalContent>
		</ModalOverlay>
	);
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  max-width: 90%;
  max-height: 90%;
  overflow-y: auto;

  h3 {
    margin-bottom: 10px;
  }

  input {
    margin-bottom: 10px;
    padding: 8px;
    font-size: 16px;
    width: 100%;
  }

  button {
    padding: 10px 20px;
    background-color: green;
    color: white;
    border: none;
    cursor: pointer;
    margin-top: 10px;
    font-size: 16px;
    width: 100%;

    &:hover {
      background-color: darkgreen;
    }
  }
`;

const ResultContainer = styled.div`
  margin-top: 20px;
`;

const ResultList = styled.div`
  display: flex;
  flex-direction: column;
`;

const ResultItem = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;

  .pokemonImage {
    width: 60px;
    height: 60px;
    border: 1px solid #ddd;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }

  .pokemonDetails {
    p {
      margin: 0;
    }
  }
`;

export default ModalSearch;

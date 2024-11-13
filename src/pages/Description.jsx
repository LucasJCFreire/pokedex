import { useEffect, useState } from "react";
import styled from "styled-components";
import Loading from "../components/Loading";
import ModalEdit from "../components/ModalEdit";
import { deleteLocalStorage } from "../services/deleteLocalStorage";
import { getStoredPokemon } from "../services/getLocalStorage";
import { saveAllLocalStorage } from "../services/saveAllLocalStorage";

export default function Description() {
	const id = window.location.pathname.replace("/description/", "").trim();
	const [info, setInfo] = useState(null);
	const [isEditMode, setIsEditMode] = useState(false);
	const [pokemonNotFound, setPokemonNotFound] = useState(false);

	useEffect(() => {
		if (!id) {
			setPokemonNotFound(true);
			return;
		}

		const storedPokemon = getStoredPokemon();
		const pokemon = storedPokemon.find((p) => p.number.toString() === id);

		if (pokemon) {
			setInfo(pokemon);
			setPokemonNotFound(false);
		} else {
			setPokemonNotFound(true);
		}
	}, [id]);

	function handleDelete() {
		const confirmDelete = window.confirm("Você realmente deseja excluir este Pokémon?");
		if (confirmDelete) {
			deleteLocalStorage(id);
			setInfo(null);
			setPokemonNotFound(false);
			window.location.href = "/";
		}
	}

	function handleEdit(updatedInfo) {
		saveAllLocalStorage(id, updatedInfo);
		setInfo(updatedInfo);
		setIsEditMode(false);
	}

	return (
		<StyledDiv>
			{pokemonNotFound ? (
				<h1>Pokémon não encontrado</h1>
			) : !info ? (
				<Loading />
			) : (
				<>
					<img src={info?.image} alt={`Imagem de ${info?.name}`} />
					<DivInfo>
						<h2>
							<span>#{info?.number} </span>
							{info?.name.toUpperCase()}
						</h2>
						<p>
							<span>Tipo: </span>
							{info?.types?.map((type) => type.toUpperCase()).join(", ")}
						</p>
						{isEditMode ? (
							<ModalEdit
								onClose={() => setIsEditMode(false)}
								initialValues={info}
								onSave={handleEdit}
							/>
						) : (
							<button type="button" onClick={() => setIsEditMode(true)}>
								Editar
							</button>
						)}
						<button type="button" onClick={handleDelete}>
							Excluir Pokémon
						</button>
					</DivInfo>
				</>
			)}
		</StyledDiv>
	);
}

const StyledDiv = styled.div`
  padding: 50px 100px 0 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  height: 100%;
  text-align: center;

  img {
    max-width: 250px;
    height: auto;
    object-fit: contain;
  }

  @media (max-width: 650px) {
    padding: 50px 10px 0 10px;
  }
`;

const DivInfo = styled.div`
  margin: 20px 0;
  flex: 0.6;

  h2 {
    min-width: 350px;
    color: var(--primary-color);
    font-size: var(--font-size-mega-large);
  }

  button {
    padding: 10px 20px;
    margin: 20px 8px;
    background-color: red;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 16px;

    &:hover {
      background-color: darkred;
    }
  }

  @media (max-width: 650px) {
    h2 {
      min-width: 300px;
      font-size: var(--font-size-extra-large);
    }
  }
`;

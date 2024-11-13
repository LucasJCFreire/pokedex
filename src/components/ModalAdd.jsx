import styled from "styled-components";

const ModalAdd = ({ show, onClose, newPokemon, setNewPokemon, onSave }) => {
	if (!show) return null;

	return (
		<ModalOverlay onClick={onClose}>
			<ModalContent onClick={(e) => e.stopPropagation()}>
				<h3>Novo Pokemon</h3>
				<input
					type="text"
					placeholder="Nome do Pokemon"
					value={newPokemon.name}
					onChange={(e) => setNewPokemon({ ...newPokemon, name: e.target.value })}
				/>
				<input
					type="text"
					placeholder="Tipo do Pokemon (separado por vírgula)"
					value={newPokemon.types.join(", ")}
					onChange={(e) => setNewPokemon({ ...newPokemon, types: e.target.value.split(", ") })}
				/>
				<input
					type="text"
					placeholder="Imagem do Pokemon"
					value={newPokemon.image}
					onChange={(e) => setNewPokemon({ ...newPokemon, image: e.target.value })}
				/>
				<button type="button" onClick={onSave}>
					Salvar
				</button>
				<button type="button" onClick={onClose}>
					Cancelar
				</button>
			</ModalContent>
		</ModalOverlay>
	);
};

export default ModalAdd;

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

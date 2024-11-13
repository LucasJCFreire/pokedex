import { useEffect, useState } from "react";
import styled from "styled-components";

export default function ModalEdit({ onClose, onSave, initialValues }) {
	const [formValues, setFormValues] = useState(initialValues);

	useEffect(() => {
		const handleKeydown = (event) => {
			if (event.key === "Escape") {
				onClose();
			}
		};

		document.addEventListener("keydown", handleKeydown);

		return () => {
			document.removeEventListener("keydown", handleKeydown);
		};
	}, [onClose]);

	const handleOverlayClick = (event) => {
		if (event.target === event.currentTarget) {
			onClose();
		}
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormValues((prevValues) => ({
			...prevValues,
			[name]: value,
		}));
	};

	const handleSave = () => {
		onSave(formValues);
		onClose();
	};

	return (
		<ModalOverlay onClick={handleOverlayClick}>
			<ModalContent>
				<h3>Editar Pokémon</h3>
				<StyledInput
					name="name"
					placeholder="Nome do Pokémon"
					value={formValues.name}
					onChange={handleInputChange}
				/>
				<StyledInput
					name="image"
					placeholder="URL da Imagem"
					value={formValues.image}
					onChange={handleInputChange}
				/>
				<StyledInput
					name="types"
					placeholder="Tipos (separados por vírgula)"
					value={formValues.types?.join(", ")}
					onChange={(e) => {
						const types = e.target.value.split(",").map((type) => type.trim());
						handleInputChange({ target: { name: "types", value: types } });
					}}
				/>
				<StyledButton type="button" onClick={handleSave}>
					Salvar
				</StyledButton>
				<StyledButton type="button" onClick={onClose}>
					Fechar
				</StyledButton>
			</ModalContent>
		</ModalOverlay>
	);
}

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
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  max-width: 90%;
  max-height: 90%;
  overflow-y: auto;

  h3 {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
    text-align: center;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  &:focus {
    outline: none;
    border-color: #888;
  }
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  margin: 5px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }

  &:first-of-type {
    background-color: #28a745;
    &:hover {
      background-color: #218838;
    }
  }

  &:last-of-type {
    background-color: #dc3545;
    &:hover {
      background-color: #c82333;
    }
  }
`;

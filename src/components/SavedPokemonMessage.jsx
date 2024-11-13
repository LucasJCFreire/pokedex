import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SavedPokemonMessage({ pokemonName, pokemonNumber, onClose }) {
	if (!pokemonName || !pokemonNumber) return null;

	return (
		<MessageOverlay>
			<p>
				Novo Pokémon salvo:{" "}
				<StyledLink to={`/description/${pokemonNumber}`} onClick={onClose}>
					{pokemonName}
				</StyledLink>
			</p>
			<button type="button" onClick={onClose}>
				Fechar
			</button>
		</MessageOverlay>
	);
}

const MessageOverlay = styled.div`
  text-align: center;
  position: fixed;
  z-index: 4;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  flex-direction:column;
  align-items: center;

  p {
    background-color: #fefefe;
    padding: 20px;
    border: 1px solid #888;
    font-size: 24px;
    font-weight: bold;
  }

  button {
    margin-left: 20px;
    padding: 10px 20px;
    font-size: 16px;
  }
`;

const StyledLink = styled(Link)`
  color: blue;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: darkblue;
  }
`;

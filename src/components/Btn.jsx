import styled from "styled-components";

export default function Btn({ handleClick, text = "Botão", icon }) {
	return (
		<StyledBtn type="button" onClick={handleClick}>
			<div className="icon">{icon}</div>
			<span>{text}</span>
		</StyledBtn>
	);
}

const StyledBtn = styled.button`
  width: 72px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
  text-align: center;
  border: none;
  background-color: white;
  border-radius: 4px;
  cursor: pointer;

  .icon {
    font-size: 24px;
  }

  span {
    font-size: 14px;
    color: #333;
  }

  &:hover {
    background-color: var(--accent-color);
  }
`;

import { FaSearch } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import styled from "styled-components";
import Btn from "./Btn";

export default function ActionsHeader() {
	return (
		<StyledDiv>
			<Btn icon={<IoIosAddCircle />} text="Adicionar" />
			<Btn icon={<FaSearch />} text="Buscar" />
		</StyledDiv>
	);
}

const StyledDiv = styled.div`
  display:flex;
  justify-content:center;
  gap: 8px;
  width: 160px;
`;

import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function Container(props) {
  const { theme } = useContext(ThemeContext);

  return <StyledDiv theme={theme}>{props.children}</StyledDiv>;
}

const StyledDiv = styled.main`
  grid-area: main;
  width: 100%;
  min-height: calc(100vh - 220px);
  background: ${({ theme }) => theme.background};
`;

export default Container;

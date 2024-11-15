import styled from "styled-components";

export default function Container(props) {
	return <StyledMain>{props.children}</StyledMain>;
}

const StyledMain = styled.main`
  width: 100%;
  min-width: 350px;
  padding: 120px 20px 20px 20px;
  height: calc(100vh - 100px);
  overflow-y: auto;
`;

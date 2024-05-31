import styled from "styled-components";
import { FcHome } from "react-icons/fc";
import { Link } from "react-router-dom";
import ToggleButtom from "../components/ToggleButtom";
import pokemonText from "../images/logo.png";

function Header() {
  return (
    <StyledHeader>
      <Link to="/">
        <FcHome style={{ fontSize: "55px" }} />
      </Link>
      <Link to="/">
        <img className="pokemonText" src={pokemonText} alt="logo pokebola" />
      </Link>
      <ToggleButtom />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  grid-area: header;
  height: 100px;
  background-color: var(--fixedElementColor);
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;
  z-index: 999;
  }
  .pokemonText {
    width: 300px;
    transform: translatey(20%);
  }

  a {
    transition: 0.1s;
  }

  a:hover {
    scale: 1.01;
  }
`;

export default Header;

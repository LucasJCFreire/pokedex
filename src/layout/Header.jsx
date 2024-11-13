import { FcHome } from "react-icons/fc";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ActionsHeader from "../components/ActionsHeader";
import text_pokemon from "../images/logo.png";

export default function Header() {
	return (
		<StyledHeader>
			<Link to="/" className="home">
				<FcHome style={{ fontSize: "55px" }} />
			</Link>
			<img className="textoPokemon" src={text_pokemon} alt="Texto colorido Pokemon" />
			<ActionsHeader />
		</StyledHeader>
	);
}

const StyledHeader = styled.header`
  min-width: 350px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--elementColor);
  padding: 0 20px;

  .home {
    width: 160px;
  }

  .textoPokemon {
    width: 300px;
    transform: translateY(20px);
    @media (max-width: 700px) {
      display: none;
    }
  }
`;

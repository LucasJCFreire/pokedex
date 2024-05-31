import styled, { keyframes } from "styled-components";
import logo from "../images/favicon.png";
import Card from "../components/Card";

function Home() {
  return (
    <StyledDiv>
      <Card />
      <a className="btnadd">
        <Img src={logo} alt="imagem pokebola" />
      </a>
    </StyledDiv>
  );
}
export default Home;

const StyledDiv = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  height: 100%;
  padding: 50px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  position: relative;
  .btnadd {
    position: absolute;
    right: 50%;
    transform: translatex(50%);
    color: white;
    bottom: -45px;
    cursor: pointer;
    transition: 0.4s;
    &:hover {
      scale: 1.05;
    }
  }
`;
const Img = styled.img`
  @keyframes shake {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    70% {
      transform: translate(0, 0) rotate(0deg);
    }
    80% {
      transform: translate(-3px, 0) rotate(-4deg);
    }
    90% {
      transform: translate(3px, 0) rotate(4deg);
    }
    100% {
      transform: translate(0, 0) rotate(0deg);
    }
  }
  animation: shake 2s infinite;
`;

import styled from "styled-components";
import { Link } from "react-router-dom";

function Card() {
  return (
    <Link to={`/description/${1}`}>
      <StyledDiv className={"grass"}>
        <DivImg>
          <img src="#" alt={`Imagem do pokemon Bubassauro`} />
        </DivImg>
        <DivInfo>
          <p>
            <span>#</span> {"1"}
          </p>
          <p>
            <span>Nome:</span> {"Bubassauro"}
          </p>
          <p>
            <span>Tipo:</span> {"Grass"}
          </p>
        </DivInfo>
      </StyledDiv>
    </Link>
  );
}

const StyledDiv = styled.div`
  background-color: #eee;
  color: var(--primary-color);
  border-radius: 10px;
  box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
  margin: 15px;
  padding: 20px;
  text-align: center;
  width: 230px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.4s;

  &.grass {
    background-color: rgba(222, 253, 224, 0.6);
  }
  &.fire {
    background-color: rgba(253, 223, 223, 0.6);
  }
  &.water {
    background-color: rgba(222, 243, 253, 0.6);
  }
  &.electric {
    background-color: rgba(255, 230, 179, 0.6);
  }
  &.rock {
    background-color: rgba(255, 215, 194, 0.6);
  }
  &.ground {
    background-color: rgba(255, 236, 179, 0.6);
  }
  &.psychic {
    background-color: rgba(224, 207, 253, 0.6);
  }
  &.bug {
    background-color: rgba(219, 230, 203, 0.6);
  }
  &.poison {
    background-color: rgba(235, 214, 255, 0.6);
  }
  &.flying {
    background-color: rgba(210, 244, 255, 0.6);
  }
  &.fighting {
    background-color: rgba(255, 219, 219, 0.6);
  }
  &.normal {
    background-color: rgba(255, 255, 204, 0.6);
  }
  &.ghost {
    background-color: rgba(216, 191, 216, 0.6);
  }
  &.dragon {
    background-color: rgba(215, 230, 255, 0.6);
  }
  &.ice {
    background-color: rgba(223, 247, 250, 0.6);
  }
  &.steel {
    background-color: rgba(221, 221, 221, 0.6);
  }
  &.dark {
    background-color: rgba(194, 194, 214, 0.6);
  }
  &.fairy {
    background-color: rgba(255, 226, 255, 0.6);
  }

  &:hover {
    cursor: pointer;
    scale: 1.05;
  }
`;

const DivImg = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 120px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    max-width: 90%;
    width: 100%;
    margin-top: 20px;
  }
`;

const DivInfo = styled.div`
  padding-top: 15px;
  line-height: 1.4;
  span {
    font-weight: bold;
  }
`;
export default Card;

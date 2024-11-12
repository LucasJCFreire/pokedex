import { Link } from "react-router-dom";
import styled from "styled-components";
import Loading from "./Loading";

export default function Card({ name, number, image, types }) {
	if (!image) {
		return <Loading />;
	}

	return (
		<Link name={name} to={`/description/${number}`}>
			<StyledDiv className={types[0]?.toLowerCase()}>
				<div className="image">
					{!image ? <Loading /> : <img src={image} alt={`Imagem do Pokémon ${name}`} />}
				</div>
				<div className="info">
					<p>
						<span>#</span> {number}
					</p>
					<p>
						<span>Nome:</span> {name.toUpperCase()}
					</p>
					<p>
						<span>Tipo:</span> {types.join(", ")}
					</p>
				</div>
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
  transition: ease 0.4s;

  &.grass {
    background-color: rgba(222, 253, 224, 0.8);
  }
  &.fire {
    background-color: rgba(253, 223, 223, 0.8);
  }
  &.water {
    background-color: rgba(222, 243, 253, 0.8);
  }
  &.electric {
    background-color: rgba(255, 230, 179, 0.8);
  }
  &.rock {
    background-color: rgba(255, 215, 194, 0.8);
  }
  &.ground {
    background-color: rgba(255, 236, 179, 0.8);
  }
  &.psychic {
    background-color: rgba(224, 207, 253, 0.8);
  }
  &.bug {
    background-color: rgba(219, 230, 203, 0.8);
  }
  &.poison {
    background-color: rgba(235, 214, 255, 0.8);
  }
  &.flying {
    background-color: rgba(210, 244, 255, 0.8);
  }
  &.fighting {
    background-color: rgba(255, 219, 219, 0.8);
  }
  &.normal {
    background-color: rgba(255, 255, 204, 0.8);
  }
  &.ghost {
    background-color: rgba(216, 191, 216, 0.8);
  }
  &.dragon {
    background-color: rgba(215, 230, 255, 0.8);
  }
  &.ice {
    background-color: rgba(223, 247, 250, 0.8);
  }
  &.steel {
    background-color: rgba(221, 221, 221, 0.8);
  }
  &.dark {
    background-color: rgba(194, 194, 214, 0.8);
  }
  &.fairy {
    background-color: rgba(255, 226, 255, 0.8);
  }

  &:hover {
    cursor: pointer;
    scale: 1.05;
  }
  .image{
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
  }
  .info{
    padding-top: 15px;
  line-height: 1.4;
  span {
    font-weight: bold;
  }
  }
`;

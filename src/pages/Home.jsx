import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import { fetchAllPokemon } from "../services/fetchAllPokemon";
import { getStoredPokemon } from "../services/getLocalStorage";

export default function Home() {
	const [count, setCount] = useState(10);
	const [list, setList] = useState([]);
	const containerRef = useRef(null);

	useEffect(() => {
		const storedPokemon = getStoredPokemon();
		if (storedPokemon.length > 0) {
			setList(storedPokemon.slice(0, 10));
		} else {
			fetchAllPokemon().then((allPokemon) => {
				setList(allPokemon.slice(0, 10));
			});
		}
	}, []);

	function addPokemon() {
		const storedPokemon = getStoredPokemon();
		setList(storedPokemon.slice(0, count + 10));
		setCount(count + 10);
		setTimeout(() => {
			containerRef.current.scrollTo({
				top: containerRef.current.scrollHeight,
				behavior: "smooth"
			});
		}, 800);
	}

	return (
		<>
			<StyledDiv ref={containerRef}>
				{list.map((pokemon, index) => (
					<Card
						key={index}
						number={pokemon.number}
						name={pokemon.name}
						types={pokemon.types}
						image={pokemon.image}
					/>
				))}
			</StyledDiv>
			<ImageDiv>
				<img onClick={addPokemon} src="./favicon.png" alt="imagem pokebola" />
			</ImageDiv>
		</>
	);
}

const StyledDiv = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  height: 100%;
  overflow-y: auto;
  padding-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  position: relative;
`;

const ImageDiv = styled.div`
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  transition: transform 0.3s ease;
  z-index: 10;
	img{
		animation: shake 2s infinite;
	}
  &:hover {
    transform: translateX(-50%) scale(1.1);
  }
			
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
`;

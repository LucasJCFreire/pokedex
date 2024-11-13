import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Loading from "../components/Loading";
import { fetchAllPokemon } from "../services/fetchAllPokemon";
import { getStoredPokemon } from "../services/getLocalStorage";

export default function Home() {
	const [count, setCount] = useState(10);
	const [list, setList] = useState([]);
	const [loading, setLoading] = useState(true);
	const containerRef = useRef(null);

	useEffect(() => {
		const storedPokemon = getStoredPokemon();
		if (storedPokemon.length > 0) {
			setList(storedPokemon.slice(0, 10));
			setLoading(false);
		} else {
			fetchAllPokemon()
				.then((allPokemon) => {
					setList(allPokemon.slice(0, 10));
				})
				.finally(() => {
					setLoading(false);
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
				behavior: "smooth",
			});
		}, 800);
	}

	const handleKeyPress = (event) => {
		if (event.key === "Enter" || event.key === " ") {
			addPokemon();
		}
	};

	return (
		<>
			<StyledDiv ref={containerRef}>
				{loading ? (
					<Loading />
				) : (
					list.map((pokemon) => (
						<Card
							key={pokemon.number}
							number={pokemon.number}
							name={pokemon.name}
							types={pokemon.types}
							image={pokemon.image}
						/>
					))
				)}
			</StyledDiv>
			<ImageDiv>
				<img
					onClick={addPokemon}
					onKeyDown={handleKeyPress}
					src="./favicon.png"
					alt="imagem pokebola"
					aria-label="Adicionar Pokémon"
				/>
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
  position: fixed;
  bottom: 75px;
  left: 50%;
  transform: translateX(-50%);
  transition: transform 0.3s ease;
  z-index: 1;
	img {
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

import styled from "styled-components";
import loading from "../images/loading.svg";

export default function Loading() {
	return <Image src={loading} alt="image loading" />;
}

const Image = styled.img`
  width: 100px;
  height: 100px;
`;

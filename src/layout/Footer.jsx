import { FaAddressCard, FaGithub, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";

export default function Footer() {
	return (
		<StyledFooter>
			<ul>
				<li>
					<a href="https://www.linkedin.com/in/lucasjcfreire/" target="_blank" rel="noreferrer">
						<FaLinkedin />
					</a>
				</li>
				<li>
					<a href="https://lucasjcfreire.vercel.app" target="_blank" rel="noreferrer">
						<FaAddressCard />
					</a>
				</li>
				<li>
					<a href="https://github.com/LucasJCFreire" target="_blank" rel="noreferrer">
						<FaGithub />
					</a>
				</li>
			</ul>
			<p>&copy; 2024 - Lucas Jones Dev</p>
		</StyledFooter>
	);
}

const StyledFooter = styled.footer`
  min-width: 350px;
  position: fixed;
  bottom: 0;
  left:0;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  background:var(--elementColor);
  padding-bottom: 15px;

  ul {
    display: flex;
  }

  a {
    color:var(--secondary-color);
    transition: 0.5s ease;
    &:hover {
      color: var(--accent-color);
    }
  }

  li {
    padding: 0 15px;
    font-size: var(--font-size-extra-large);
  }

  p {
    font-size: var(--font-size-small);
    color:var(--secondary-color);
  }
`;

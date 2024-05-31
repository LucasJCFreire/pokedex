import { FaAddressCard, FaGithub, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";

function FooterBar() {
  return (
    <Footer>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/lucasjcfreire/" target="_blank">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://lucasjcfreire.github.io/portfolio/" target="_blank">
            <FaAddressCard />
          </a>
        </li>
        <li>
          <a href="https://github.com/LucasJCFreire" target="_blank">
            <FaGithub />
          </a>
        </li>
      </ul>
      <p>&copy; 2024 - Lucas Jones Dev</p>
    </Footer>
  );
}

const Footer = styled.footer`
  grid-area: footer;
  height: 120px;
  background-color: var(--fixedElementColor);
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  color: var(--fixedTextColor);
  padding-bottom: 15px;

  ul {
    display: flex;
  }

  a {
    transition: 0.5s ease;
    color: var(--fixedTextColor);
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
  }
`;

export default FooterBar;

import { createGlobalStyle } from "styled-components";

const Styles = createGlobalStyle`
:root {
  --primary-color: #333;
  --secundary-color: whitesmoke;
  --elementColor: #222;
  --bgColor: #fff;

  --accent-color: #F04037;

  --font-size-small: 1.4rem;
  --font-size-base: 1.6rem;
  --font-size-medium: 2rem;
  --font-size-large: 2.5rem;
  --font-size-extra-large: 3rem;

  //Layout
  --borderColor: #222;
  --fixedElementColor: #222;
  --fixedTextColor: #fff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

#root {
  display: grid;
  grid-template-areas: "header""main""footer";
  grid-template-columns: 100vw;
  min-width: 375px;
  min-height: 100vh;
}

html{
  font-size: 62.5%
}

body {
  font-size: var(--font-size-base);
}
`;

export default Styles;

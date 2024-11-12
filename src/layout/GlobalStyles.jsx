import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --primary-color: #333;
  --secondary-color: whitesmoke;
  --elementColor: #222;
  --bgColor: #fff;

  --primary-font: "Montserrat", sans-serif;
  --accent-color: #C0C0C0;

  --font-size-small: 1.4rem;
  --font-size-base: 1.6rem;
  --font-size-medium: 2rem;
  --font-size-large: 2.5rem;
  --font-size-extra-large: 3rem;
  --font-size-mega-large: 4rem;
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
  min-height: 100vh;
  min-width: 350px;
}

html{
  font-size: 62.5%;
  font-family: var(--primary-font);
}

body {
  font-size: var(--font-size-base);
  color:var(--primary-color);
}
`;

export default GlobalStyles;

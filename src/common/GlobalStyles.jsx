import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  }

html {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  margin: 0;
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen', 'Ubuntu',
  'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  background-color: #fff;
  color: #010101;
  line-height: 1.5;
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  /* text-align: center; */
}

ul,
ol {
  padding: 0;
    margin: 0;
  /* list-style: none; */
}

img {
  display: block;
  max-width: 100%;
}


a {
  text-decoration: none;
  /* outline: none; */
}
`;

export default GlobalStyle;

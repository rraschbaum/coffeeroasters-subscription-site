import { createGlobalStyle } from "styled-components";

import { WEIGHTS, COLORS } from "../constants";

const GlobalStyle = createGlobalStyle`
    html {
    --color-aqua: hsl(${COLORS.aqua});
    --color-teal: hsl(${COLORS.teal});
    --color-peach: hsl(${COLORS.peach});
    --color-cream: hsl(${COLORS.cream});
    --color-white: hsl(${COLORS.white});
    --color-gray-100: hsl(${COLORS.gray[100]});
    --color-gray-200: hsl(${COLORS.gray[200]});
    --color-gray-300: hsl(${COLORS.gray[300]});
    --color-gray-400: hsl(${COLORS.gray[400]});
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  /* html,
  body,
  body > div:first-child,
  div#__next,
  div#__next > div {
    height: 100%;
  } */

  html,
  body {
    height: 100%;
  }

  body {
    font-family: 'Barlow', sans-serif;
    font-weight: ${WEIGHTS.regular};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    background-color: var(--color-cream);
    color: var(--color-gray-400);
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Fraunces", serif;
    font-weight: ${WEIGHTS.black};
  }

  #root, #__next {
    isolation: isolate;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

`;

export default GlobalStyle;

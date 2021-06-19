import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: clamp(12px, calc(0.75rem + ((1vw - 3px) * 0.6667)), 18px);
    min-height: 0vw;
  }

  body {
    margin: 0;
    padding: 0;
    background: gray;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    
    button {
      font-family: 'VT323',sans-serif;
      font-size: 1em;
      background-color: #FFCE31;
      width: fit-content;
      height: 2em;
      transition: background-color 200ms;
      border: 0;
      border-radius: 0.5em;
      box-shadow: 0 0 1em 0.01em rgba(0 0 0 / 0.2);

      &:hover{
        background-color: #d5b60a;
        cursor: pointer;
      }
    }
  }

  header {
    font-size: 1rem;
    background-color: #342F99;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    left: 0;
    max-width: 1200px;
    margin: 0 auto;
    height: 6em;
    z-index: 2;
    padding: 0 2em;

    &::after {
      content: "";
      width: 100vw;
      height: 6em;
      background-color: #342F99;
      position: fixed;
      top: 0;
      left: 0;
      z-index: -1;
    }

    h1 {
      color :#FFCE31;
      font-family: 'Oswald', sans-serif;
      font-size: 2em;
      letter-spacing: 5px;
      margin: 0;
    }

    button {
      font-size: 1.2rem;
      width: 9em;
    }
  }
`;

export default GlobalStyle;

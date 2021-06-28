import styled, { createGlobalStyle } from "styled-components";

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

export const Header1Button = styled.header`
  h1 {
    margin-left: auto;
    margin-right: auto;
    padding-right: calc(9 * 1.2rem); // 
  }

  @media only screen and (max-width: 35em) {
    height: fit-content;
    flex-direction: column;
    padding: 1em;
    flex-direction: column-reverse;
    h1 {
      padding-right: 0;
      margin-bottom: 0.5em
    }
  }
`;

export const MainGrid = styled.main`
  font-size: 1rem;
  display: grid;
  padding: 2em;
  grid-template-columns: repeat(auto-fill, minmax(min-content, 15em));
  grid-gap: 2em;
  justify-content: center;
`;

export default GlobalStyle;

import styled from "styled-components";

export const Header = styled.header`
  h1 {
    margin-left: auto;
    margin-right: auto;
    padding-right: calc(9 * 1.2rem); // 
  }
`;

export const Main = styled.main`
  font-size: 1rem;
  display: grid;
  padding: 2em;
  grid-template-columns: repeat(auto-fill, minmax(min-content, 15em));
  grid-gap: 2em;
  justify-content: center;
`;

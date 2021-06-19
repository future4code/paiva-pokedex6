import styled from "styled-components";

export const DetailsMain = styled.main`
  font-size: 1rem;
  display: grid;
  grid-template-columns: auto minmax(min-content, auto) 1fr;
  grid-gap: 2em;
  max-width: 90em;
  margin: 0 auto;
  padding: 2em;

  @media only screen and (max-width: 60em) {
    grid-template-columns: auto 1fr;
  }

  @media only screen and (max-width: 33em) {
    grid-template-columns: 1fr;
  }
`;

export const Header = styled.header`
  &::after {
  }
`;

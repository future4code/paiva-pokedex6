import styled from "styled-components";

export const Card = styled.article`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  background-color:#F5F5F5;
  box-shadow: 0 0 10px 1px rgba(0 0 0 / 0.2);
  font-size: 1rem;
  border-radius: 1em;
  padding: 1em;
  transition: transform 200ms;
  cursor: pointer;

  p {
    font-family: 'Oswald', sans-serif;
    text-transform:capitalize;
    letter-spacing: 0.1em;
    font-weight: 600;
    font-size: 1.75em;
    margin: 0;
  }

  img {
    width: 90%;
  }
  &:hover{
    transform: scale(1.1);
  }
`;

export const Buttons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5em;
  margin-top: 0.5em;
  align-items:center;
  width: 100%;

  button {
    width: 100%;
  }
`;

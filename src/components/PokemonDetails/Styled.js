import styled from "styled-components";

export const Images = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #342F99;
  height: fit-content;
  border-radius: 20px;
  box-shadow: 0 0 10px 3px rgba(0 0 0 / 0.2);

  img {
    width: clamp(96px, calc(61.34px + 11.55vw), 200px);
    overflow: hidden;
  }

  @media only screen and (max-width: 33em) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const SectionText = styled.section`
  background-color: #342F99;
  color: #FFCE31;
  padding: 1em;
  height: fit-content;
  border-radius: 20px;
  box-shadow: 0 0 10px 3px rgba(0 0 0 / 0.2);
  text-align: center;
`;

export const SectionStats = styled(SectionText)`
  @media only screen and (max-width: 60em) {
    grid-row: 1 / span 1;
    grid-column: 1 / span 2;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    h2 {
      width: 100%;
    }
    
    article {
      flex-grow: 1;
      margin: 0.5em;
    }
  }

  @media only screen and (max-width: 33em) {
    grid-column: 1 / span 1;
  }
`;

export const SectionInfo = styled(SectionText)`
`;

export const ArticleTypes = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-wrap: wrap;
  p {
    margin: 0.5em;
  }
`;

export const ArticleMovs = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fill, 13ch);
  justify-items: center;
  justify-content: center;

  p {
    width: fit-content;
  }
`;

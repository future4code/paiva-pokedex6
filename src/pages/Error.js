import React from "react";
import styled from "styled-components";

const StyledError = styled.div`
display:flex;
align-items: center;
flex-direction: column;
`;
const TextoError = styled.h2`
color: #4fb16f;
`;

export default function Error() {
  return (
    <StyledError>
      <TextoError> Página Não Encontrada</TextoError>
      <iframe
        src="https://giphy.com/embed/HZpCCbcWc0a3u"
        width="500vh"
        height="480"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
      />
    </StyledError>
  );
}


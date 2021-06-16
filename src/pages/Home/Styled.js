import styled from "styled-components";

export const Header = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    background-color:blue;
    margin-bottom:8px;
    padding:8px;
    p{
        margin:auto;
    }
`;

export const Main = styled.div`
    height:100%;
    width:100%;
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    grid-template-rows:1fr 1fr 1fr;
    grid-row-gap:8px;
    grid-column-gap:8px;
`;

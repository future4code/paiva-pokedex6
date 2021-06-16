import styled from "styled-components";

export const Card = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-color:gray;
    border:1px solid black;
    border-radius:1rem;
`;

export const Info = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

`;

export const Buttons = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    buttons{
        outline:none;
        background-color:white;
        border:none;
    }
    

`;

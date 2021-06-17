import styled from "styled-components";

export const Header = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    background-color:#342F99;
    margin-bottom:8px;
    align-items:center;
    position:sticky;
    top:0;
    z-index:9;
    }
    p{
        color:#FFCE31;
        font-family: 'Oswald', sans-serif;
        font-size:30px;
        letter-spacing:5px;
    }
    button{
        font-family:'VT323',sans-serif;
        font-size:20px;
        outline:none;
        background-color:#FFCE31;
        width:10em;
        height:2em;
        position:fixed;
        left:30px;
        top:30px;
        :hover{
            background-color:#d5b60a;
            cursor: pointer;
        }
    }
`;

export const Main = styled.div`
    display:grid;
    padding:8px;
    grid-template-columns:repeat(4, 1fr);
    grid-template-rows:repeat(5, 1fr);
    grid-row-gap:8px;
    grid-column-gap:32px;
`;

import styled from "styled-components";

export const Card = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-color:#F5F5F5;
    border:1px solid #342F99;
    border-radius:1rem;
    
`;

export const Info = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    p{
        font-family: 'Oswald', sans-serif;
        text-transform:capitalize;
        letter-spacing:4px;
        font-weight:600;
        font-size:25px;
        margin:0;
    }
    img{
        height:300px;
        :hover{
        -webkit-transform: scale(1.05);
        -ms-transform: scale(1.05);
        transform: scale(1.05);
    }
    
    }
`;

export const Buttons = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    button{
        outline:none;
        font-family:'VT323',sans-serif;
        background-color:#FFCE31;
        font-size:15px;
        height:30px;
        width:90px;
        margin:8px;
        :hover{
            background-color:#d5b60a;
            cursor: pointer;
        }
    }
    

`;

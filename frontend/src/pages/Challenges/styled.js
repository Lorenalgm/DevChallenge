import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.section`
    margin-top: 3%;
    display: flex;
    flex-wrap: wrap;
    max-width: 100vw;
    align-items: center;
    justify-content: center;
`;

export const Anchor = styled(Link)`
    text-decoration: none;
    cursor: pointer;

    color: var(--white);
`;

export const ChallengeCard = styled.div`
    height: 350px;
    width: 300px;

    background-color: var(--secondary);
    border-radius: 16px;
    
    margin: 0 .5em 1em .5em;

    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;
    overflow: hidden;
`;

export const CardImage = styled.div`
    overflow: hidden;
    height: 150px;
    width: 300px;
    background-color: #2B3035;

    img{
        transition: .3s;
        width: 100%
    }
    img:hover{
        transform: scale(1.1);
    }
`;

export const CardContent = styled.div`
    margin-top: 16px;
    color: var(--white);
    text-align: center;

    padding: 0 16px;
    
    h1 {
        font-size: 28px;
        margin-bottom: 12px;
        font-weight: 500;
    }
`;

export const CardTechs = styled.div`
    position: absolute;
    top: 16px;
    padding: 0 16px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    z-index: 999;
    .tech {
       
        background-color: var(--quaternary);
        padding: 5px 20px;
        border-radius: 25px;
        text-align: center;
        font-weight: bold;
        color: var(--white);
        align-items: center;
        height: 30px;
    }

    .level {
        color: var(--yellow);
        font-weight: bold;
    }
`;

export const Button = styled.button`
    width: 80%;
    height: 56px;

    position: absolute;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);

    
    background: var(--purple);
    color: var(--white);
    font-weight: bold;
    font-size: 18px;

    border-radius: 50px;

    cursor: pointer;

    transition: .25s;

    &:hover{
        width: 83%;
    }
`

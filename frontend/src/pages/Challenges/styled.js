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

export const ChallengeCard = styled.div`
    height: 21em;
    width: 20em;
    background-color: var(--dark-gray);
    border-radius: 10px;
    cursor: pointer;
    margin: 0 .5em 2em .5em;
    position: relative;
    overflow: hidden;
`;

export const Anchor = styled(Link)`
    text-decoration: none;
`;

export const CardImage = styled.div`
    overflow: hidden;
    height: 12em;
    width: 20em;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    img{
        transition: .3s;
    }
    img:hover{
        transform: scale(1.1);
    }
`;

export const CardContent = styled.div`
    margin-top: 15px;
    padding: 0 15px;
    color: var(--white);
    text-align: center;
    
    h1 {
        font-size: 20px;
        font-weight: bold;
        
        text-align: center;
        margin-top: 2%;
        margin-bottom: 2%;
    }
`;

export const CardTechs = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 0 15px;

    position: absolute;
    bottom: 15px;

    align-items: center;

    .tech {
        color: var(--yellow);
        font-weight: bold;
    }

    .level {
        background-color: var(--yellow);
        filter: brightness(90%);
        padding: 5px 20px;
        border-radius: 25px;
        text-align: center;
        font-weight: bold;
        color: var(--black);
        align-items: center;
        max-height: 30px;
    }
`;

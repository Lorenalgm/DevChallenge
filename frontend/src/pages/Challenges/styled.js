import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.section`
    margin-top: 3%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
`;

export const ChallengeCard = styled.div`
    height: 21em;
    width: 20em;
    background-color: #242020;
    border-radius: 10px;
    cursor: pointer;
    margin-bottom: 2em;
    position: relative;

    overflow: hidden;

    transition: .25s;

    &:hover {
        transform: scale(1.05);
        background-color: #333333;
    }
`;

export const Anchor = styled(Link)`
    text-decoration: none;
`;

export const CardImage = styled.div`
    overflow: hidden;

    img {
        height: 12em;
        width: 20em;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        transition: 300ms;
    }

    img:hover {
        transform: scale(1.05);
    }
`;

export const CardContent = styled.div`
    padding: 0 15px;
    color: #ffff;
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
        color: var(--color-yellow);
        font-weight: bold;
    }

    .level {
        background-color: var(--color-yellow);
        filter: brightness(90%);
        padding: 5px 20px;
        border-radius: 25px;
        text-align: center;
        font-weight: bold;
        color: #000000;
        align-items: center;
        max-height: 30px;
    }
`;

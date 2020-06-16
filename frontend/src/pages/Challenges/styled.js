import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
    margin-top: 3%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: center;
`;

export const ChallengeCard = styled(Link)`
    width: 20em;
    background-color: #242020;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
    margin-left: 0.5em;
    margin-right: 0.5em;
    text-decoration: none;
`;

export const CardImage = styled.div`
    img {
        height: 12em;
        width: 20em;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        object-fit: cover;
        object-position: center;
    }
`;

export const CardContent = styled.div`
    padding: 12px;

    h1 {
        font-size: 20px;
        font-weight: bold;
        color: #ffff;
        text-align: center;
        margin-top: 2%;
        margin-bottom: 2%;
    }

    p {
        text-align: left;
        color: #ffff;
        text-align: center;
    }
`;

export const CardTechs = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    padding-top: 5px;
    padding: 15px;

    .tech {
        color: var(--color-yellow);
        font-weight: bold;
    }

    .level {
        background-color: var(--color-yellow);
        filter: brightness(90%);
        padding: 5px 20px;
        border-radius: 20px;
        text-align: center;
        font-weight: bold;
        color: #000000;
    }
`;

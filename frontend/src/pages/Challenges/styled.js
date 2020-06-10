import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: center;
`;

export const ChallengeCard = styled.div`
    width: 30%;
    background-color: #242020;
    border-radius: 10px;
    cursor: pointer;
    margin: 16px;
`;

export const Anchor = styled(Link)`
    text-decoration: none;
`;

export const CardImage = styled.div`
    img {
        width: 100%;
        max-height: 250px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
`;

export const CardContent = styled.div`
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
    display: grid;
    grid-template-columns: 2fr 1fr;
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

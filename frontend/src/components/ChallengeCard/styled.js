import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Anchor = styled(Link)`
    text-decoration: none;
    cursor: pointer;

    color: var(--white);
`;

export const Level = styled.span`
    background-color: var(--${(props) => props.color});
    padding: 3px 8px;
    font-size: 11px;
    height: 25px;
    border-radius: 20px;
    font-weight: bold;
`;

export const ChallengeCard = styled.div`
    height: 350px;
    width: 300px;

    background-color: var(--secondary);
    border-radius: 16px;

    margin: 0 0.5em 1em 0.5em;

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
    background-color: #2b3035;

    img {
        transition: 0.3s;
        width: 100%;
    }
    img:hover {
        transform: scale(1.1);
    }
`;

export const CardContent = styled.div`
    margin-top: 16px;
    color: var(--white);
    /* text-align: center; */
    width: 100%;
    padding: 0 16px;

    h1 {
        font-size: 28px;
        margin-top: 7px;
        font-weight: 500;
    }

    /* p {
      margin-top: 10px;
    } */
`;

export const CardTechs = styled.div`
    position: absolute;
    right: 0;
    top: 16px;
    padding: 0 16px;
    width: 45%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 999;
    .tech {
        background-color: var(--quaternary);
        padding: 5px 10px;
        margin-bottom: 5px;
        border-radius: 25px;
        text-align: center;
        font-weight: bold;
        color: var(--white);
        align-items: center;
        height: 25px;
        font-size: 13px;
    }

    .level {
        color: var(--yellow);
        font-weight: bold;
    }
`;

export const Button = styled.button`
    width: 80%;
    height: 46px;

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

    transition: 0.25s;

    &:hover {
        width: 83%;
    }
`;

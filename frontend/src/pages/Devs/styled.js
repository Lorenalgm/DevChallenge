import styled from 'styled-components';
import media from 'styled-media-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 6%;
    flex: 1 1;

    ${media.lessThan('medium')`
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin: 0%;
        margin-top: 5%;
    `}
`;

export const OptionsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    a {
        text-decoration: none;
    }
`;

export const Option = styled.div`
    width: 300px;
    height: 300px;
    background-color: #2c2929;
    margin: 20px;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    transition: .25s;

    &:hover {
        transform: scale(1.05);
        background-color: var(--dark-gray);
    }
`;

export const OptionIcon = styled(FontAwesomeIcon)`
    color: var(--yellow) !important;
    font-size: 60px !important;
    height: 60px;
`;

export const OptionTitle = styled.h2`
    color: var(--white);
    margin-top: 20px;
    text-align: center;
`;

export const Help = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
        color: var(--white);
        font-size: 18px;
        font-weight: normal;
        margin-bottom: 0.5em;
    }
`;

export const Button = styled.a`
    color: var(--white);
    background-color: var(--purple);
    width: 15em;
    height: 3em;
    font-weight: bold;
    font-size: 18px;
    border-radius: 50px;
    cursor: pointer;
    transition: 0.3s;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: var(--dark-purple);
    }
`;

export const DevsContainer = styled.div`
    margin-top: 4em;
`;

export const DevsTitle = styled.h1`
    text-align: center;
    color: var(--white);
`;

export const Devs = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 3em;
    justify-content: center;
    flex-wrap: wrap;
`;

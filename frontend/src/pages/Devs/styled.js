import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 6%;
    flex: 1;

    ${media.lessThan('medium')`
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin: 0%;
        margin-top: 5%;
    `}
`;

export const Help = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
        color: #ffff;
        font-size: 18px;
        font-weight: normal;
        margin-bottom: 0.5em;
    }
`;

export const Button = styled.a`
    color: #ffff;
    background-color: #5c0d78;
    width: 15em;
    height: 3em;
    border: 1px solid #000000;
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
        background-color: #490861;
    }
`;

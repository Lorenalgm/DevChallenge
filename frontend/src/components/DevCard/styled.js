import styled from 'styled-components';
import media from 'styled-media-query';

export const Card = styled.div`
    min-width: 300px;
    height: 90px;

    box-sizing: border-box;
    padding: 0px 10px;

    background: var(--secondary);
    border-radius: 16px;

    display: flex;
    align-items: center;
    
    position: relative;

    > img {
        height: 70px;
        width: 70px;
        border-radius: 50%;
    }

    ${media.lessThan('medium')`
        margin-bottom: 5%;
    `}
`;


export const Infos = styled.div`
    max-width: 200px;
    flex-wrap: wrap;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;

    margin: 0 16px;

    > h1 {
        font-size: 18px;
        font-weight: bold;
        color: var(--white);
    }

    > span {
        font-size: 14px;
        font-weight: 500;
        color: var(--yellow);
    }
`;


export const Social = styled.div`
    display: flex;
    flex-direction: column;

    position: absolute;
    right: 16px;
`;

export const Anchor = styled.a`
    text-decoration: none;
    color: var(--white);
    font-size: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: .25s;

    &:hover{
        color: var(--yellow);
    }
`;
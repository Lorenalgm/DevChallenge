import styled from 'styled-components';
import media from 'styled-media-query';

import { Link } from 'react-router-dom';

export const Anchor = styled(Link)`
    text-decoration: none;
    margin: 0 25px 0 25px;

    @media(max-width: 1053px) and (min-width: 700px) {
        &:last-child {
            margin-top: 30px
        }
    }

    ${media.lessThan('medium')`
        margin: 15px 25px 10px 25px;
    `}
`;

export const Card = styled.div`
    width: 300px;
    height: 300px;
    background-color: var(--secondary);
    border-radius: 20px;
    
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.25s;

    &:hover {
        background-color: var(--dark-hover);
    }
`;

export const Title = styled.h2`
    color: var(--white);
    margin-top: 20px;

    ${media.lessThan('medium')`
        margin-top: 0.6em;
    `}
`;



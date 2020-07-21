import styled from 'styled-components';
import media from 'styled-media-query';

import { Link } from 'react-router-dom';

export const Tech = styled.div`
    width: 300px;
    height: 300px;
    background-color: var(--gray);
    margin: 50px;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    ${media.lessThan('medium')`
        height: 8em;
        width: 20em;
        margin: 1.4em;
    `}

    transition: 0.25s;

    &:hover {
        background-color: var(--dark-gray);
    }
`;

export const TechName = styled.h2`
    color: var(--white);
    margin-top: 20px;

    ${media.lessThan('medium')`
        margin-top: 0.6em;
    `}
`;

export const Anchor = styled(Link)`
    text-decoration: none;
`;

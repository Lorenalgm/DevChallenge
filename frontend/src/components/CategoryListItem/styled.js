import styled from 'styled-components';
import media from 'styled-media-query';

import { Link } from 'react-router-dom';

export const Anchor = styled(Link)`
    text-decoration: none;
    flex: 1 1 auto;
    margin: 30px;

    ${media.lessThan('medium')`
        margin: 12px 0;
    `}
`;

export const Tech = styled.div`
    background-color: #2c2929;
    border-radius: 10px;
    cursor: pointer;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    ${media.lessThan('medium')`
        padding: 30px 0;
    `}

    &:hover {
        transition: 0.7s;
        background-color: #242020;
    }
`;

export const TechName = styled.h2`
    color: #ffff;
    margin-top: 20px;

    ${media.lessThan('medium')`
        margin-top: 0.6em;
    `}
`;

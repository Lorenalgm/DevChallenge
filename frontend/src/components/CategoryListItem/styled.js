import styled from 'styled-components';
import media from 'styled-media-query';

import { Link } from 'react-router-dom';

export const Tech = styled(Link)`
    width: 300px;
    height: 300px;
    background-color: #2c2929;
    margin: 0px 25px 50px 25px;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    text-decoration: none;

    ${media.lessThan('medium')`
        height: 8em;
        max-width: 20em;
        width: 100%;
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

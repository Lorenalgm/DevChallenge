import styled from 'styled-components';
import media from 'styled-media-query';

import Icon from 'react-web-vector-icons';
import { Link } from 'react-router-dom';

export const Tech = styled.div`
    width: 300px;
    height: 300px;
    background-color: #2c2929;
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
        margin: 0;
        margin-bottom: 1.4em;
    `}

    &:hover {
        transition: 0.7s;
        background-color: #242020;
    }
`;

export const TechIcon = styled(Icon)`
    color: #f4cf0a !important;
    font-size: 60px !important;
    height: 60px;

    ${media.lessThan('medium')`
        height: 3em;
        width: 3em;
    `}
`;

export const TechName = styled.h2`
    color: #ffff;
    margin-top: 20px;

    ${media.lessThan('medium')`
        margin-top: 0.6em;
    `}
`;

export const Anchor = styled(Link)`
    text-decoration: none;
`;

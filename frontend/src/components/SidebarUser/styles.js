import styled from 'styled-components';
import media from 'styled-media-query';
import { NavLink } from 'react-router-dom';

export const Aside = styled.aside`
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;

    width: 350px;
    background: var(--secondary);
    color: var(--white);

    ${media.between('medium', 'large')`
        width: 278px;
    `}

    ${media.lessThan('860px')`
        display: none; 
    `}
`;

export const UserInfo = styled.div`
    margin-top: 40px;

    & > p {
        font-size: 16px;
        font-family: Roboto;
    }

    & > span {
        font-family: Roboto;
        font-size: 12px;
    }
`;

export const Img = styled.img`
    height: 90px;
    width: 90px;
    border-radius: 50%;
    margin-bottom: 10px;
    border: 3px solid var(--yellow);
`;

export const Menu = styled.div`
    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 350px;
        margin-top: 60px;
        list-style: none;

        ${media.between('medium', 'large')`
        width: 278px;
    `}

        li {
            width: 200px;
            height: 45px;
            display: flex;
            align-items: center;
            font-size: 18px;
        }

        li:hover {
            opacity: 0.8;
        }
    }
`;

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: var(--white);

    &.is-active {
        color: var(--yellow);
    }
`;

export const MenuMobile = styled.div`
    display: none;

    transition: 0.25s;

    ${media.lessThan('medium')`
        display: block;
        position: absolute;
        font-size: 25px;
        color: var(--white);
        top: 50px;
        left: 20px;
        margin-right: 20px;
        cursor: pointer;

        z-index: 9999;
    `}
`;

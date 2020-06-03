import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 2%;

    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
        align-content: center;
        text-align: center;
        justify-content: center;
    }
`;

export const Title = styled.div`
    font-size: 30px;
    font-weight: bold;
    color: #fff;
    span {
        color: #f4cf0a;
    }
`;

export const Menu = styled.div`
    ul {
        display: flex;
        flex-direction: row;
        list-style-type: none;
        font-size: 20px;
        color: #ffff;

        li {
            margin-left: 0;
        }

        & li:not(:first-child) {
            margin-left: 20px;
        }

        li:hover {
            opacity: 0.8;
            cursor: pointer;
        }

        @media (max-width: 800px) {
            justify-content: center;
            text-align: center;
            align-content: center;
            margin-top: 0.5em;
        }
    }
`;

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: #fff;

    &.is-active {
        color: #f4cf0a;
    }
`;

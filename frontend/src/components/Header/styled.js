import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
    display: flex;
    justify-content: space-between;

    padding: 0px 80px 0 80px;
    margin-top: 40px;

    font-weight: normal;

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
    color: var(--white);

    span {
        color: var(--yellow);
    }
`;

export const Menu = styled.div`
    ul {
        display: flex;
        align-items: center;

        list-style-type: none;

        font-size: 20px;
        color: var(--white);

        li ~ li {
          margin-left: 20px;
        }

        li:hover{
            opacity: .8;
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
    color: var(--white);

    cursor: pointer;

    &.is-active {
        color: var(--yellow);
    }
`;

export const ButtonLink = styled(NavLink)`
    background-color: var(--quaternary);

    width: 100px;
    padding: 5px 20px;
    border-radius: 25px;

    text-align: center;
    text-decoration: none;
    color: var(--white);

    &.is-active {
        background-color: var(--yellow);
        color: var(--tertiary);
    }
`;
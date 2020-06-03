import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 2%;


    @media (max-width: 1200px) {
        display: flex;
        flex-direction: column;
        align-content: center;
        text-align: center;
        justify-content: center;
    }
`;

export const Title = styled.div`
    font-size: 40px;
    font-weight: bold;
    color: #fff;
    margin-top:0.5em;
    transition: all .2s ease-out;
       
    :hover{
        transition: all .2s ease-in-out;
        transform: scale(1.2);
    }

    span {
        color: #f4cf0a;
    }

    @media (max-width: 800px) {
        margin-top: 2em;
    }
`;

export const Menu = styled.div`
    
    justify-content: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;


    ul {
        display: flex;
        flex-direction: row;
        list-style-type: none;
        justify-items: center;
        font-size: 20px;
        color: #ffff;

    li {
        border-radius: 10%;
        border: 2px solid white;
        padding: 1em;
        margin: 1em;
        transition: all .2s ease-out;
        }


    li:hover {
        background:opacity: 0.8;
        cursor: pointer;
        transition: all .2s ease-in;
        transform: scale(1.2);
        }
    
    



    @media screen and (max-width: 1200px) {
        justify-content: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 3em;
        
        li {
            width: 100vw;
            margin: 1em;
            border: none;
        }

        li:hover {
            background-color: #fff;
        }
            
        }
    }
`;

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: #fff;

    :hover{
    color: #f4cf0a;
    }

    &.is-active {
        color: #f4cf0a;
    }
`;

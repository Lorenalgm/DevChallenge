import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import Logo from '../Logo';

import * as S from './styled';

export default function Header() {
    const location = useLocation();
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        setClicked(false);
    }, [location]);

    return (
        <S.Header>
            <Logo />

            <S.MenuMobile onClick={() => setClicked(!clicked)}>
                {!clicked ? (
                    <FontAwesomeIcon icon={faBars} aria-label="menu closed" />
                ) : (
                    <FontAwesomeIcon icon={faTimes} aria-label="menu opened" />
                )}
            </S.MenuMobile>

            <S.Menu open={!clicked}>
                <ul>
                    <li>
                        <S.StyledLink activeClassName="is-active" to="/" exact>
                            Início
                        </S.StyledLink>
                    </li>
                    <li>
                        <S.StyledLink
                            activeClassName="is-active"
                            to="/challenges"
                        >
                            Desafios
                        </S.StyledLink>
                    </li>
                    <li>
                        <S.StyledLink activeClassName="is-active" to="/devs">
                            Comunidade
                        </S.StyledLink>
                    </li>
                    <li>
                        <S.ButtonLink
                            activeClassName="is-active"
                            href={`https://github.com/login/oauth/authorize?scope=userl&client_id=${process.env.REACT_APP_CLIENT_ID}`}
                        >
                            Entrar
                            <FontAwesomeIcon
                                icon={faGithub}
                                style={{ marginLeft: '10px' }}
                            />
                        </S.ButtonLink>
                    </li>
                </ul>
            </S.Menu>
        </S.Header>
    );
}

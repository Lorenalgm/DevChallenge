import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import * as S from './styled';

export default function AdminHome() {
    const location = useLocation();
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        setClicked(false);
    }, [location]);

    return (
        <>
            <S.Header>
                <div
                    style={{
                        display: 'flex',
                        gap: '16px',
                        alignItems: 'center',
                    }}
                >
                    <S.Title>
                        <S.StyledLink to="/" exact>
                            Dev<span>Challenge</span>
                        </S.StyledLink>
                    </S.Title>
                    <S.Title style={{ fontSize: 14, fontWeight: 'normal' }}>
                        Area administrativa
                    </S.Title>
                </div>

                <S.MenuMobile onClick={() => setClicked(!clicked)}>
                    {!clicked ? (
                        <FontAwesomeIcon icon={faBars} />
                    ) : (
                        <FontAwesomeIcon icon={faTimes} />
                    )}
                </S.MenuMobile>

                <S.Menu open={!clicked}>
                    <ul>
                        <li>
                            <S.StyledLink
                                activeClassName="is-active"
                                to="/admin/home"
                                exact
                            >
                                Início
                            </S.StyledLink>
                        </li>
                        <li>
                            <S.StyledLink
                                activeClassName="is-active"
                                to="/admin/challenges"
                            >
                                Desafios
                            </S.StyledLink>
                        </li>
                        <li>
                            <S.StyledLink
                                activeClassName="is-active"
                                to="/admin/devs"
                            >
                                Comunidade
                            </S.StyledLink>
                        </li>
                    </ul>
                </S.Menu>
            </S.Header>

            <S.Main></S.Main>
        </>
    );
}

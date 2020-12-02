import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import Icon from 'react-web-vector-icons';
import { Aside, Img, UserInfo, StyledLink, Menu, MenuMobile } from './styles';

function SidebarUser() {
    const location = useLocation();
    const [clicked, setClicked] = useState(false);
    const [user, setUser] = useState({});

    useEffect(() => {
        setClicked(false);
        setUser({
            name: 'Dev Challenge',
            username: '@devChallenge',
            img: '',
        });
    }, [location]);

    return (
        <>
            <MenuMobile onClick={() => setClicked(!clicked)}>
                {!clicked ? (
                    <FontAwesomeIcon icon={faBars} />
                ) : (
                    <FontAwesomeIcon icon={faTimes} />
                )}
            </MenuMobile>
            <Aside open={clicked}>
                <UserInfo>
                    <Img
                        src={
                            user.img
                                ? user.img
                                : 'https://trello-attachments.s3.amazonaws.com/590fa896d2d25e50583de620/500x500/0bdcc819ea145cb0167619c6d00f2174/D.png'
                        }
                        alt=""
                    />
                    <p className="user-name">{user.name}</p>
                    <span>{user.username}</span>
                </UserInfo>

                <Menu>
                    <ul>
                        <li>
                            <StyledLink
                                activeClassName="is-active"
                                to="/challenges"
                            >
                                <Icon
                                    style={{ marginRight: 20 }}
                                    name="desktop"
                                    color="#f4cf0a"
                                    size={20}
                                    font="FontAwesome"
                                />
                                Desafios
                            </StyledLink>
                        </li>
                        <li>
                            <StyledLink
                                activeClassName="is-active"
                                to="/dashboard/myChallenges"
                            >
                                <Icon
                                    style={{ marginRight: 20 }}
                                    name="code"
                                    color="#f4cf0a"
                                    size={20}
                                    font="FontAwesome"
                                />
                                Meus Desafios
                            </StyledLink>
                        </li>
                        <li>
                            <StyledLink activeClassName="is-active" to="/devs">
                                <Icon
                                    style={{ marginRight: 20 }}
                                    name="desktop"
                                    color="#f4cf0a"
                                    size={20}
                                    font="FontAwesome"
                                />
                                Comunidade
                            </StyledLink>
                        </li>
                    </ul>
                </Menu>
            </Aside>
        </>
    );
}

export default SidebarUser;

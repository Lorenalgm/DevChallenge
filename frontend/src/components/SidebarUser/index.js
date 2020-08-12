import React from 'react';

import Icon from 'react-web-vector-icons';
import { Aside, Img, Ul, Li, UserInfo } from './styles';

function SidebarUser() {
    return (
        <Aside>
            <UserInfo>
                <Img
                    src="https://avatars2.githubusercontent.com/u/48053804?s=460&u=41a09241f1f585f000c86e67bf3b6147aed66ed6&v=4"
                    alt=""
                />
                <p className="user-name">Luis Sousa</p>
                <span>@OIncognita</span>
            </UserInfo>
            <Ul>
                <Li>
                    <Icon
                        style={{ marginRight: 20 }}
                        name="desktop"
                        color="#f4cf0a"
                        size={20}
                        font="FontAwesome"
                    />
                    Desafios
                </Li>
                <Li>
                    <Icon
                        style={{ marginRight: 20 }}
                        name="code"
                        color="#f4cf0a"
                        size={20}
                        font="FontAwesome"
                    />
                    Meus Desafios
                </Li>
                <Li>
                    <Icon
                        style={{ marginRight: 20 }}
                        name="desktop"
                        color="#f4cf0a"
                        size={20}
                        font="FontAwesome"
                    />
                    Comunidade
                </Li>
            </Ul>
        </Aside>
    );
}

export default SidebarUser;

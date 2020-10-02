import React from 'react';
import { useTranslation } from 'react-i18next';

import * as S from './styled';

export default function Header(props) {
    // i18n -> it'll get the translation
    const { t } = useTranslation();

    return (
        <S.Header>
            <S.Title>
                <S.StyledLink to="/" exact>
                    Dev<span>Challenge</span>
                </S.StyledLink>
            </S.Title>
            <S.Menu>
                <ul>
                    <li>
                        <S.StyledLink activeClassName="is-active" to="/" exact>
                            {t('Header.link_1')}
                        </S.StyledLink>
                    </li>
                    <li>
                        <S.StyledLink
                            activeClassName="is-active"
                            to="/challenges"
                        >
                            {t('Header.link_2')}
                        </S.StyledLink>
                    </li>
                    <li>
                        <S.StyledLink activeClassName="is-active" to="/devs">
                            {t('Header.link_3')}
                        </S.StyledLink>
                    </li>
                </ul>
            </S.Menu>
        </S.Header>
    );
}

import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import * as S from './styled';

export default function Header() {
    // i18n -> it'll get the translation
    const { t } = useTranslation();
  
    const location = useLocation();
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        setClicked(false);
    }, [location]);

    return (
        <S.Header>
            <S.Title>
                <S.StyledLink to="/" exact>
                    Dev<span>Challenge</span>
                </S.StyledLink>
            </S.Title>

            <S.MenuMobile onClick={() => setClicked(!clicked)}>
                {!clicked ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faTimes} />}
            </S.MenuMobile>

            <S.Menu open={!clicked} >
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
                    <li>
                      <S.ButtonLink activeClassName="is-active" to="/login">
                          Entrar
                      </S.ButtonLink>
                    </li>
                </ul>
            </S.Menu>
        </S.Header>
    );
}

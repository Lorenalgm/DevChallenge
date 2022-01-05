/* eslint-disable no-shadow */
import React, { useEffect, useCallback, useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

import api from '../../services/api';
import { login } from '../../services/authentication';

import Logo from '../../components/Logo';

import * as S from './styled';

export default function CallbackPage() {
    const history = useHistory();

    const { search } = useLocation();
    const searchParam = new URLSearchParams(search);

    const code = searchParam.get('code');

    const { setUser } = useContext(AuthContext);

    const authenticateUserWithGithub = useCallback(
        async (code) => {
            const response = await api.get(
                `http://localhost:3333/auth/${code}`
            );
            if (response.status === 200 || response.status === 201) {
                setUser(response.data.user);
                login(response.data.token);
                history.push('/dashboard');
            }
        },
        [history, setUser]
    );

    useEffect(() => {
        authenticateUserWithGithub(code);
    }, [code, authenticateUserWithGithub]);

    return (
        <S.Container>
            <Logo />
            <h2>Aguardando as informações...</h2>
        </S.Container>
    );
}

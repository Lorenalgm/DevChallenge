import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faLock } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';

import * as S from './styled';

export default function Login() {
  return (
    <S.Section>
      <S.Form>
        <S.Title>Entrar</S.Title>
        <S.Box>
          <S.Field>
            <FontAwesomeIcon icon={faAt} color="grey" />
            <S.Input placeholder="Email" type="email" required />
          </S.Field>
          <S.Field>
            <FontAwesomeIcon icon={faLock} color="grey" />
            <S.Input placeholder="Senha" type="password" required />
          </S.Field>
        </S.Box>
        <S.Buttons>
          <S.ButtonBox>
            <S.SocialButton><FontAwesomeIcon icon={faGithub} /></S.SocialButton>
            <S.SocialButton><FontAwesomeIcon icon={faGoogle} /></S.SocialButton>
          </S.ButtonBox>

          <S.ButtonBox>
            <S.Button className="cadastro">Criar conta</S.Button>
            <S.Button className="login">Entrar</S.Button>
          </S.ButtonBox>
        </S.Buttons>
        <S.Problem>Problemas?<strong> clique aqui</strong></S.Problem>
      </S.Form>
    </S.Section>
  );
}
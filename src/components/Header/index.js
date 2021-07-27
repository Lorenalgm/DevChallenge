import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaGithub, FaBars, FaTimes } from 'react-icons/fa';

import * as S from './styled';

export default function Header() {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setClicked(false);
  }, [router]);

  return (
    <S.Header>
      <S.Title>
        <Link href="/" passHref>
          <S.StyledLink>
            Dev<span>Challenge</span>
          </S.StyledLink>
        </Link>
      </S.Title>

      <S.MenuMobile onClick={() => setClicked(!clicked)}>
        {!clicked ? <FaBars /> : <FaTimes />}
      </S.MenuMobile>

      <S.Menu open={!clicked}>
        <ul>
          <li>
            <Link href="/" passHref>
              <S.StyledLink
                className={router.asPath === '/' ? 'is-active' : ''}
              >
                Início
              </S.StyledLink>
            </Link>
          </li>
          <li>
            <Link href="/challenges" passHref>
              <S.StyledLink
                className={
                  router.asPath.startsWith('/challenges') ? 'is-active' : ''
                }
              >
                Desafios
              </S.StyledLink>
            </Link>
          </li>
          <li>
            <Link href="/devs" passHref>
              <S.StyledLink
                className={router.asPath.startsWith('/devs') ? 'is-active' : ''}
              >
                Comunidade
              </S.StyledLink>
            </Link>
          </li>
          <li>
            <Link href="/login" passHref>
              <S.ButtonLink
                className={
                  router.asPath.startsWith('/login') ? 'is-active' : ''
                }
              >
                Entrar
                <FaGithub style={{ marginLeft: '10px' }} />
              </S.ButtonLink>
            </Link>
          </li>
        </ul>
      </S.Menu>
    </S.Header>
  );
}

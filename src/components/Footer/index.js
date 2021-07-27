import React from 'react';

import { FaGithub, FaDiscord, FaInstagram, FaTwitter } from 'react-icons/fa';

import * as S from './styled';

function Footer() {
  return (
    <S.Container>
      <S.Social>
        <S.Anchor
          className="icon"
          rel="noopener noreferrer"
          target="_blank"
          href={`https://www.instagram.com/devchallenge`}
        >
          <FaInstagram />
        </S.Anchor>
        <S.Anchor
          className="icon"
          rel="noopener noreferrer"
          target="_blank"
          href={`https://discord.gg/yvYXhGj`}
        >
          <FaDiscord />
        </S.Anchor>
        <S.Anchor
          className="icon"
          rel="noopener noreferrer"
          target="_blank"
          href={`https://twitter.com/dev_challenge`}
        >
          <FaTwitter />
        </S.Anchor>
        <S.Anchor
          className="icon"
          rel="noopener noreferrer"
          target="_blank"
          href={`https://github.com/devchallenge-io`}
        >
          <FaGithub />
        </S.Anchor>
      </S.Social>
      <S.Title>
        Dev<span>Challenge</span>
      </S.Title>
    </S.Container>
  );
}

export default Footer;

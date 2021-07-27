import React from 'react';
import Link from 'next/link';

import * as S from './styled';

export default function Banner() {
  return (
    <S.BannerContainer>
      <S.Typewriter>
        <S.BannerTitle>Melhore suas habilidades</S.BannerTitle>
      </S.Typewriter>
      <S.BannerSubtitle>
        Com desafios de front-end, back-end e mobile
      </S.BannerSubtitle>
      <Link href="/challenges">
        <a>
          <S.BannerButton type="button">Bora codar!</S.BannerButton>
        </a>
      </Link>
    </S.BannerContainer>
  );
}

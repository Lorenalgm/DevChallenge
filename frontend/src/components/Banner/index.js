import React from 'react';
import { Link } from 'react-router-dom';

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
            <Link to="/challenges">
                <S.BannerButton type="button">Bora codar!</S.BannerButton>
            </Link>
        </S.BannerContainer>
    );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import * as S from './styled';

export default function Banner() {
    // i18n -> it'll get the translation
    const { t } = useTranslation();

    return (
        <S.BannerContainer>
            <S.Typewriter>
                <S.BannerTitle>{t('Banner.title')}</S.BannerTitle>
            </S.Typewriter>
            <S.BannerSubtitle>
                {t('Banner.description')}
            </S.BannerSubtitle>
            <Link to="/challenges">
                <S.BannerButton type="button">
                    {t('Banner.button')}
                </S.BannerButton>
            </Link>
        </S.BannerContainer>
    );
}

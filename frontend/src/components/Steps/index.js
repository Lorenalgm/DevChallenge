import React from 'react';
import {
    faSearch,
    faCode,
    faShareSquare,
} from '@fortawesome/free-solid-svg-icons';

import * as S from './styled';
import { useTranslation } from 'react-i18next';

export default function Steps() {
    // i18n -> it'll get the translation
    const { t } = useTranslation();
    
    return (
        <S.StepsContainer>
            <S.Step>
                <S.Icon icon={faSearch} />
                <h2>{t('Steps.step_1')}</h2>
            </S.Step>
            <S.Step>
                <S.Icon icon={faCode} />
                <h2>{t('Steps.step_2')}</h2>
            </S.Step>
            <S.Step>
                <S.Icon icon={faShareSquare} />
                <h2>{t('Steps.step_3')}</h2>
            </S.Step>
        </S.StepsContainer>
    );
}

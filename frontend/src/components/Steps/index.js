import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSearch,
    faCode,
    faShareSquare,
} from '@fortawesome/free-solid-svg-icons';

import * as S from './styled';

export default function Steps() {
    return (
        <S.StepsContainer>
            <S.Step>
                <S.Icon icon={faSearch} />
                <h2>Escolha</h2>
            </S.Step>
            <S.Step>
                <S.Icon icon={faCode} />
                <h2>Desenvolva</h2>
            </S.Step>
            <S.Step>
                <S.Icon icon={faShareSquare} />
                <h2>Compartilhe</h2>
            </S.Step>
        </S.StepsContainer>
    );
}

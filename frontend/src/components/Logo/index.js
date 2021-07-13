import React from 'react';

import { StyledLink } from '../Header/styled';

import * as S from './styled';

function Logo() {
    return (
        <S.Title>
            <StyledLink to="/" exact>
                Dev<span>Challenge</span>
            </StyledLink>
        </S.Title>
    );
}

export default Logo;

import React from 'react';

import * as S from './styled';

import { Link } from 'react-router-dom';

export default function CategoryListItem({ category }) {
    return (
        <S.Anchor className="challenge-link" to="/challenges">
            <S.Tech>
                <S.TechIcon name={category.icon} font="FontAwesome" />
                <S.TechName>{category.name}</S.TechName>
            </S.Tech>
        </S.Anchor>
    );
}

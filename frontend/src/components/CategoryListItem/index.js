import React from 'react';

import * as S from './styled';
import Icon from 'react-web-vector-icons';

export default function CategoryListItem({ category }) {
    return (
        <S.Anchor className="challenge-link" to="/challenges">
            <S.Tech>
                <Icon
                    name={category.icon}
                    color="#f4cf0a"
                    size={50}
                    font="FontAwesome"
                />
                <S.TechName>{category.name}</S.TechName>
            </S.Tech>
        </S.Anchor>
    );
}

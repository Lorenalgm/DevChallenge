import React from 'react';

import * as S from './styled';
import Icon from 'react-web-vector-icons';
import { Link } from 'react-router-dom';
import media from 'styled-media-query';

export default function CategoryListItem({ category }) {
    return (
        <S.Tech className="challenge-link" to="/challenges">
            <Icon
                name={category.icon}
                color="#f4cf0a"
                size={50}
                font="FontAwesome"
            />
            <S.TechName>{category.name}</S.TechName>
        </S.Tech>
    );
}

import React from 'react';

import Icon from 'react-web-vector-icons';
import * as S from './styled';

export default function CategoryListItem({ category }) {
    return (
        <S.Anchor
            className="challenge-link"
            to={{
                pathname: `/challenges`,
                search: `?type=${category.name}`,
            }}
        >
            <S.Card>
                <Icon
                    name={category.icon}
                    color="#f4cf0a"
                    size={50}
                    font="FontAwesome"
                />
                <S.Title>{category.name}</S.Title>
            </S.Card>
        </S.Anchor>
    );
}

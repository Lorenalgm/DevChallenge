import React from 'react';

import Icon from 'react-web-vector-icons';
import * as S from './styled';

export default function CategoryListItem({ category }) {
    const type = category.name.replace('-', '');
    return (
        <S.Anchor 
          className="challenge-link"
          to={{
            pathname: `/challenges/${type.toLowerCase()}`,
            state: { type },
          }}
        >
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

import React from 'react';
import CategoryListItem from '../CategoryListItem';

import * as S from './styled';

const categories = [
    { name: 'Front-end', icon: 'desktop' },
    { name: 'Back-end', icon: 'code' },
    { name: 'Mobile', icon: 'mobile' },
];

export default function CategoriesList() {
    return (
        <S.Techs>
            {categories.map((category, index) => (
                <CategoryListItem category={category} key={index} />
            ))}
        </S.Techs>
    );
}

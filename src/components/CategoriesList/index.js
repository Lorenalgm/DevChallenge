import React from 'react';
import CategoryListItem from '../CategoryListItem';

import * as S from './styled';

const categories = [
  { _id: 1, name: 'Front-end', icon: 'desktop' },
  { _id: 2, name: 'Back-end', icon: 'code' },
  { _id: 3, name: 'Mobile', icon: 'mobile' },
];

export default function CategoriesList() {
  return (
    <S.Techs>
      {categories.map((category) => (
        <CategoryListItem category={category} key={category._id} />
      ))}
    </S.Techs>
  );
}

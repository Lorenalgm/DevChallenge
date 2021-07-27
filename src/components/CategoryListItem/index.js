import React from 'react';
import Link from 'next/link';
import Icon from 'react-web-vector-icons';

import * as S from './styled';

export default function CategoryListItem({ category }) {
  const type = category.name.replace('-', '').toLowerCase();

  return (
    <Link href={`/challenges?type=${type}`}>
      <S.Anchor className="challenge-link">
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
    </Link>
  );
}

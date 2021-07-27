import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import * as S from './styled';

export default function ChallengesSkeleton({ cards = 4 }) {
  const arr = Array.from({ length: cards }, (_, i) => i + 1);

  return (
    <SkeletonTheme color="#1A1C1F" highlightColor="#1F2124">
      <S.Section>
        {arr.map((item) => (
          <S.ChallengeSkeleton key={item}>
            <Skeleton height={'100%'} width={'100%'} />
          </S.ChallengeSkeleton>
        ))}
      </S.Section>
    </SkeletonTheme>
  );
}

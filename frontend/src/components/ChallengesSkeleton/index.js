import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import * as S from './styled';

export default function ChallengesSkeleton({ cards = 3 }) {
    var arr = [];

    for (var i = 0; i < parseInt(cards); i++) {
        arr.push('');
    }

    return (
        <SkeletonTheme color="#1A1C1F" highlightColor="#1F2124">
            <S.Section>
                {arr.map(() => (
                    <S.ChallengeSkeleton>
                        <Skeleton height={'100%'} width={'100%'} />
                    </S.ChallengeSkeleton>
                ))}
            </S.Section>
        </SkeletonTheme>
    );
}

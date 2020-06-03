import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import * as S from "./styled";

export default function ChallengesSkeleton() {
    return (
        <SkeletonTheme color="#202020" highlightColor="#444">
            <S.Section>
                <S.ChallengeSkeleton>
                    <Skeleton height={`100%`} width={`100%`} />
                </S.ChallengeSkeleton>
                <S.ChallengeSkeleton>
                    <Skeleton height={`100%`} width={`100%`} />
                </S.ChallengeSkeleton>
                <S.ChallengeSkeleton>
                    <Skeleton height={`100%`} width={`100%`} />
                </S.ChallengeSkeleton>
                <S.ChallengeSkeleton>
                    <Skeleton height={`100%`} width={`100%`} />
                </S.ChallengeSkeleton>
                <S.ChallengeSkeleton>
                    <Skeleton height={`100%`} width={`100%`} />
                </S.ChallengeSkeleton>
                <S.ChallengeSkeleton>
                    <Skeleton height={`100%`} width={`100%`} />
                </S.ChallengeSkeleton>
            </S.Section>
        </SkeletonTheme>
    );
}

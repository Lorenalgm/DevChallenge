import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import './styles.css';

export default function ChallengesSkeleton() {
    return (
        <SkeletonTheme color="#202020" highlightColor="#444">
            <section className="challenges-skeleton">
                <div className="challenge-skeleton">
                    <Skeleton height={'100%'} width={'100%'} />
                </div>
                <div className="challenge-skeleton">
                    <Skeleton height={'100%'} width={'100%'} />
                </div>
                <div className="challenge-skeleton">
                    <Skeleton height={'100%'} width={'100%'} />
                </div>
                <div className="challenge-skeleton">
                    <Skeleton height={'100%'} width={'100%'} />
                </div>
                <div className="challenge-skeleton">
                    <Skeleton height={'100%'} width={'100%'} />
                </div>
                <div className="challenge-skeleton">
                    <Skeleton height={'100%'} width={'100%'} />
                </div>
            </section>
        </SkeletonTheme>
    );
}

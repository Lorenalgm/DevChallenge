import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import './styles.css';

export default function ChallengesSkeleton({ cards = 3 }) {
    var arr = [];

    for (var i = 0; i < parseInt(cards); i++) {
        arr.push('');
    }

    return (
        <SkeletonTheme color="#202020" highlightColor="#444">
            <section className="challenges-skeleton">
                {arr.map(() => (
                    <div className="challenge-skeleton">
                        <Skeleton height={'100%'} width={'100%'} />
                    </div>
                ))}
            </section>
        </SkeletonTheme>
    );
}

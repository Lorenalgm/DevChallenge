import React from 'react';

import * as S from './styled';

const colorMatch = {
    beginner: 'nephritis',
    intermediate: 'pumpkin',
    advanced: 'pomegranate',
    Mobile: 'blue',
    Frontend: 'red',
    Backend: 'light-purple',
};
function ChallengeCard({ challenge, progress, redirect, buttonText }) {
    const techs = challenge.techs.toString().split(', ');
    const color =
        challenge.level === 'beginner'
            ? 'nephritis'
            : challenge.level === 'intermediate'
            ? 'pumpkin'
            : 'pomegranate';

    return (
        <S.ChallengeCard key={challenge._id}>
            <S.Anchor to={`/challenges/${challenge._id}/details`}>
                <S.CardImage>
                    <S.CardTechs>
                        {techs.map((item, id) => (
                            <p className="tech" key={id}>
                                {item}
                            </p>
                        ))}
                    </S.CardTechs>
                    <S.CardPlatforms>
                        <S.Level color={colorMatch[challenge.type]}>
                            {challenge.type}
                        </S.Level>
                        <S.Level color={colorMatch[challenge.level]}>
                            {challenge.level}
                        </S.Level>
                    </S.CardPlatforms>
                    <img src={challenge.background} alt="" />
                </S.CardImage>
                {progress && <S.ProgressBar progress={progress} />}
            </S.Anchor>
            <S.CardContent>
                <S.Anchor to={`/challenges/${challenge._id}/details`}>
                    <S.Level color={color}>{challenge.level}</S.Level>
                    <h1>{challenge.name}</h1>
                </S.Anchor>
                <p>{challenge.description}</p>{' '}
            </S.CardContent>
            <S.Anchor to={`${redirect}`}>
                <S.Button>{buttonText}</S.Button>
            </S.Anchor>
        </S.ChallengeCard>
    );
}

export default ChallengeCard;

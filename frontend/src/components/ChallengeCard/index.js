import React from 'react';

import * as S from './styled';

function ChallengeCard({ challenge }) {
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
                    <img src={challenge.background} alt="" />
                </S.CardImage>
            </S.Anchor>
            <S.CardContent>
                <S.Anchor to={`/challenges/${challenge._id}/details`}>
                    <S.Level color={color}>{challenge.level}</S.Level>
                    <h1>{challenge.name}</h1>
                </S.Anchor>
                <p>{challenge.description}</p>{' '}
            </S.CardContent>
            <S.Anchor to={`/challenges/${challenge._id}/details`}>
                <S.Button>Abrir desafio</S.Button>
            </S.Anchor>
        </S.ChallengeCard>
    );
}

export default ChallengeCard;

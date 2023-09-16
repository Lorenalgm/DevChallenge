import React, { useState, useEffect } from 'react';

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
    const [techs, setTechs] = useState([]);

    useEffect(() => {
        const techsUnOrder = challenge.techs
            .toString()
            .split(',')
            .map((element) => element.replace(/^[ ]/, ''));

        techsUnOrder.forEach((techItem, i) => {
            techsUnOrder.forEach((element, j) => {
                if (j > i && element.length > techItem.length) {
                    const aux = techItem;
                    techsUnOrder[i] = element;
                    techsUnOrder[j] = aux;
                }
            });
        });

        setTechs(techsUnOrder);
    }, [challenge.techs]);

    return (
        <S.ChallengeCard key={challenge.id}>
            <S.Anchor to={`/challenges/${challenge.id}/details`}>
                <S.CardImage>
                    <S.CardTechs>
                        {techs.map((item) => (
                            <p className="tech" key={`${item}-${challenge.id}`}>
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
                <S.Anchor to={`/challenges/${challenge.id}/details`}>
                    <h1>{challenge.name}</h1>
                </S.Anchor>
                <p>
                    {challenge.description.length > 120
                        ? challenge.description.substr(0, 120) + '...'
                        : challenge.description}
                </p>{' '}
            </S.CardContent>
            <S.Anchor to={`${redirect}`}>
                <S.Button>{buttonText}</S.Button>
            </S.Anchor>
        </S.ChallengeCard>
    );
}

export default ChallengeCard;

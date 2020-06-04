import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Header from '../../components/Header';
import ChallengesSkeleton from '../../components/ChallengesSkeleton';
import * as S from './styled';

export default function Challenges() {
    const [challenges, setChallenges] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadChallenges() {
            const response = await api.get('/challenges');
            // console.log(response.data);
            setChallenges(response.data);

            setLoading(false);
        }

        loadChallenges();
    }, []);

    return (
        <body>
            <Header />
            {loading && <ChallengesSkeleton cards={6} />}
            {!loading && (
                <S.Section>
                    {challenges.map((challenge) => (
                        <S.ChallengeCard key={challenge._id}>
                            <S.Anchor
                                to={{
                                    pathname: `detail/${challenge._id}`,
                                    challenge: challenge,
                                }}
                            >
                                <S.CardImage>
                                    <img src={challenge.background} alt="" />
                                </S.CardImage>
                                <S.CardContent>
                                    <h1>{challenge.name}</h1>
                                    <p>{challenge.description}</p>
                                </S.CardContent>
                                <S.CardTechs>
                                    <p className="tech">
                                        {challenge.techs.join(', ')}
                                    </p>
                                    <p className="level">{challenge.level}</p>
                                </S.CardTechs>
                            </S.Anchor>
                        </S.ChallengeCard>
                    ))}
                </S.Section>
            )}
        </body>
    );
}

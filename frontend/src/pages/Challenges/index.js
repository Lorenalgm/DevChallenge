import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import ChallengesSkeleton from '../../components/ChallengesSkeleton';
import * as S from './styled';

export default function Challenges({ location }) {
    const [challenges, setChallenges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [techs, setTechs] = useState([]);

    useEffect(() => {
        async function loadChallenges() {
            let response = [];
            if (location.state) {
              response = await api.get(`/challenges/?type=${location.state.type}`);
            } else {
              response = await api.get('/challenges');
            }
            //console.log(response.data);
            setChallenges(response.data);
            setTechs(response.data[0].techs.toString().split(', '));

            setLoading(false);
        }

        loadChallenges();
    }, [location]);

    return (
        <>
            {loading && <ChallengesSkeleton cards={6} />}
            {!loading && (
                <S.Section>
                    {challenges.map((challenge) => (
                        <S.ChallengeCard key={challenge._id}>
                            <S.Anchor
                                to={`/detail/${challenge._id}`}
                            >
                                <S.CardImage>
                                    <S.CardTechs>
                                        <p className="level">{challenge.level}</p>
                                        
                                        {techs.map((item, id) => <p className="tech" key={id}>{item}</p>)}
                                    </S.CardTechs>
                                    <img src={challenge.background} alt="" />
                                </S.CardImage>
                            </S.Anchor>
                                <S.CardContent>
                                    <S.Anchor
                                    to={`/detail/${challenge._id}`}
                                    >
                                        <h1>{challenge.name}</h1>
                                    </S.Anchor>
                                    <p>{challenge.description}</p>
                                </S.CardContent>
                                <S.Anchor
                                    to={`/detail/${challenge._id}`}
                                    >
                                        <S.Button>Abrir desafio</S.Button>
                                </S.Anchor>
                        </S.ChallengeCard>
                    ))}
                </S.Section>
            )}
        </>
    );
}

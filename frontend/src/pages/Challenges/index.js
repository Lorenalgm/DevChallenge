import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import ChallengesSkeleton from '../../components/ChallengesSkeleton';
import Header from '../../components/Header';
import * as S from './styled';
import Header from '../../components/Header';

export default function Challenges({ location }) {
    const [challenges, setChallenges] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        async function loadChallenges() {
            let response = [];
            if (location.state) {
                response = await api.get(
                    `/challenges/?type=${location.state.type}`
                );
            } else {
                response = await api.get('/challenges');
            }
            // console.log(response.data);
            setChallenges(response.data);

            setLoading(false);
        }

        loadChallenges();
    }, [location]);
    return (
        <>
            <Header />
            {loading && <ChallengesSkeleton cards={6} />}
            {!loading && (
                <S.Section>
                    {challenges.map((challenge) => {
                        const techs = challenge.techs.toString().split(', ');
                        const color =
                            challenge.level === 'beginner'
                                ? 'nephritis'
                                : challenge.level === 'intermediate'
                                ? 'pumpkin'
                                : 'pomegranate';
                        return (
                            <S.ChallengeCard key={challenge._id}>
                                <S.Anchor to={`/detail/${challenge._id}`}>
                                    <S.CardImage>
                                        <S.CardTechs>
                                            {techs.map((item, id) => (
                                                <p className="tech" key={id}>
                                                    {item}
                                                </p>
                                            ))}
                                        </S.CardTechs>
                                        <img
                                            src={challenge.background}
                                            alt=""
                                        />
                                    </S.CardImage>
                                </S.Anchor>
                                <S.CardContent>
                                    <S.Anchor to={`/detail/${challenge._id}`}>
                                        <S.Level color={color}>
                                            {challenge.level}
                                        </S.Level>
                                        <h1>{challenge.name}</h1>
                                    </S.Anchor>
                                    <p>{challenge.description}</p>{' '}
                                </S.CardContent>
                                <S.Anchor to={`/detail/${challenge._id}`}>
                                    <S.Button>Abrir desafio</S.Button>
                                </S.Anchor>
                            </S.ChallengeCard>
                        );
                    })}
                </S.Section>
            )}
        </>
    );
}

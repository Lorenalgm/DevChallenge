import React, { useEffect, useMemo, useState } from 'react';
import ChallengeCard from '../../components/ChallengeCard';
import ChallengesSkeleton from '../../components/ChallengesSkeleton';
import Header from '../../components/Header';
import { useChallenges } from '../../hooks/useChallenges';
import * as S from './styled';

const languages = [
    { id: 1, name: 'React Native' },
    { id: 2, name: 'Free Choice' },
    { id: 3, name: 'Javascript' },
    { id: 4, name: 'HTML' },
    { id: 5, name: 'CSS' },
];

const types = [
    { id: 1, name: 'Front-end' },
    { id: 2, name: 'Back-end' },
    { id: 3, name: 'Mobile' },
];

export default function Challenges({ location }) {
    const { challengesList } = useChallenges();
    const [loading, setLoading] = useState(true);
    const [languageFilter, setLanguageFilter] = useState('');
    const [typeFilter, setTypeFilter] = useState('');

    const filteredChallenges = useMemo(() => {
        const activeOnly = challengesList.filter((item) => item.active);

        const languageFiltered =
            languageFilter === ''
                ? activeOnly
                : activeOnly.filter((item) =>
                      item.techs.includes(languageFilter)
                  );

        const typeFiltered =
            typeFilter === ''
                ? languageFiltered
                : languageFiltered.filter((item) => item.type === typeFilter);

        setLoading(false);

        return typeFiltered;
    }, [challengesList, languageFilter, typeFilter]);

    useEffect(() => {
        if (location.search.includes('?type=')) {
            const queryTypeParam = location.search.replace('?type=', '');
            setTypeFilter(queryTypeParam);
        }
    }, [location]);

    return (
        <>
            <Header />
            <S.Head>
                <h1>Desafios</h1>
                <S.Filters>
                    <S.InputGroup>
                        <label htmlFor="categoria">Categoria</label>
                        <S.Select>
                            <select
                                name="categoria"
                                onChange={(e) => {
                                    setTypeFilter(e.target.value);
                                }}
                                value={typeFilter}
                            >
                                <option value="">All</option>
                                {types.map((type) => (
                                    <option key={type.id} value={type.name}>
                                        {type.name}
                                    </option>
                                ))}
                            </select>
                        </S.Select>
                    </S.InputGroup>
                    <S.InputGroup>
                        <label htmlFor="linguagem">Linguagem</label>
                        <S.Select>
                            <select
                                name="linguagem"
                                id=""
                                onChange={(e) =>
                                    setLanguageFilter(e.target.value)
                                }
                            >
                                <option value="">All</option>
                                {languages.map((lang) => (
                                    <option key={lang.id} value={lang.name}>
                                        {lang.name}
                                    </option>
                                ))}
                            </select>
                        </S.Select>
                    </S.InputGroup>
                </S.Filters>
            </S.Head>

            {loading && <ChallengesSkeleton />}
            {!loading && (
                <S.Section>
                    {filteredChallenges.map((challenge) => {
                        return (
                            <ChallengeCard
                                challenge={challenge}
                                buttonText="Ver detalhes"
                                redirect={`/challenges/${challenge.id}/details`}
                                key={challenge.id}
                            />
                        );
                    })}
                </S.Section>
            )}
        </>
    );
}

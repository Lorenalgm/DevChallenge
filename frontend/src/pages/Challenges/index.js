import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import ChallengesSkeleton from '../../components/ChallengesSkeleton';
import ChallengeCard from '../../components/ChallengeCard';
import Header from '../../components/Header';
import * as S from './styled';

const languages = [
    { id: 1, name: 'React Native' },
    { id: 2, name: 'Free Choice' },
    { id: 3, name: 'Javascript' },
    { id: 4, name: 'HTML' },
    { id: 5, name: 'CSS' },
];

const types = [
    { id: 1, name: 'Frontend' },
    { id: 2, name: 'Backend' },
    { id: 3, name: 'Mobile' },
];

export default function Challenges({ location }) {
    const [challenges, setChallenges] = useState([]);
    const [filteredChallenges, setFilteredChallenges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [languageFilter, setLanguageFilter] = useState('');
    const [typeFilter, setTypeFilter] = useState(location.search.split('=')[1]);

    function capitalize(s) {
        return s && s[0].toUpperCase() + s.slice(1);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        async function loadChallenges() {
            const response = await api.get('/challenges');

            setChallenges(response.data);
            setFilteredChallenges(response.data);

            setLoading(false);
        }

        loadChallenges();
    }, [location]);

    useEffect(() => {
        let filtered = challenges;
        if (typeFilter) {
            filtered = filtered.filter(
                (challenge) =>
                    challenge.type.toLowerCase() === typeFilter.toLowerCase()
            );
        }
        if (languageFilter) {
            filtered = filtered.filter((challenge) => {
                const [ techs ] = challenge.techs;
                const serializedTechs = techs.split(', ');
                const hasSelectedTech =
                    serializedTechs.includes(languageFilter) ||
                    serializedTechs.includes('Free Choice');

                return hasSelectedTech;
            });
        }
        setFilteredChallenges(filtered);
    }, [typeFilter, languageFilter, challenges]);

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
                                defaultValue={capitalize(typeFilter)}
                            >
                                <option value="">All</option>
                                {types.map((type) => (
                                    <option key={type.id} value={type.nam}>
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
                                buttonText="ver detalhes"
                                redirect={`/challenges/${challenge._id}/details`}
                                key={challenge._id}
                            />
                        );
                    })}
                </S.Section>
            )}
        </>
    );
}

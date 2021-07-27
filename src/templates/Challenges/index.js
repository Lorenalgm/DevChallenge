import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import api from '../../services/api';
import ChallengesSkeleton from '../../components/ChallengesSkeleton';
import ChallengeCard from '../../components/ChallengeCard';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
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
  const router = useRouter();
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [languageFilter, setLanguageFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState(router.query.type);

  function capitalize(s) {
    return s && s[0].toUpperCase() + s.slice(1);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    async function loadChallenges() {
      let response = [];
      if (typeFilter) {
        const type = capitalize(typeFilter);
        response = await api.get(`/challenges/?type=${type}`);
      } else {
        response = await api.get('/challenges');
      }
      console.log(response.data);
      setChallenges(response.data);

      setLoading(false);
    }

    loadChallenges();
  }, [location, typeFilter, languageFilter]);

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
                onChange={(e) => setLanguageFilter(e.target.value)}
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
          {challenges &&
            challenges.map((challenge) => {
              return (
                <ChallengeCard
                  key={challenge._id}
                  challenge={challenge}
                  buttonText="ver detalhes"
                  redirect={`/challenges/${challenge._id}/details`}
                />
              );
            })}
        </S.Section>
      )}

      <Footer />
    </>
  );
}

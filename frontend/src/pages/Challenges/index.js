import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import ChallengesSkeleton from '../../components/ChallengesSkeleton';
import ChallengeCard from '../../components/ChallengeCard';
import Header from '../../components/Header';
import * as S from './styled';

export default function Challenges({ location }) {
    const [challenges, setChallenges] = useState([]);
    const [loading, setLoading] = useState(true);
    function capitalize(s) {
        return s && s[0].toUpperCase() + s.slice(1);
    }
    useEffect(() => {
        window.scrollTo(0, 0);
        async function loadChallenges() {
            let response = [];
            let type = location.search.split('=')[1];
            type = capitalize(type);
            if (type) {
                response = await api.get(`/challenges/?type=${type}`);
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
                        return <ChallengeCard challenge={challenge} />;
                    })}
                </S.Section>
            )}
        </>
    );
}

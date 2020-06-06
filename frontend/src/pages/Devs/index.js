import React, { useEffect, useState } from 'react';

import * as S from './styled';

import api from '../../services/api';
import Header from '../../components/Header';
import Dev from '../../components/Dev';

export default function Challenges() {
    const [devs, setDevs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadChallenges() {
            const response = await api.get('/devs');
            // console.log(response.data);
            setDevs(response.data);

            setLoading(false);
        }

        loadChallenges();
    }, []);

    return (
        <>
            <Header />

            <S.Container>
                {!loading && (
                    <section className="devs">
                        {devs.map((dev) => (
                            <Dev info={dev} />
                        ))}
                    </section>
                )}
                <S.Help>
                    <h3>Deseja contribuir?</h3>
                    <S.Button
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://lgoesmontes.typeform.com/to/xKHESI"
                    >
                        Submeter novo desafio
                    </S.Button>
                </S.Help>
            </S.Container>
        </>
    );
}

import React, { useEffect, useState } from 'react';
import {
    faLightbulb,
    faCodeBranch,
    faComment,
} from '@fortawesome/free-solid-svg-icons';

import * as S from './styled';

import DevCard from '../../components/DevCard';
import Header from '../../components/Header';
import loadChallengesDevs from '../../services/loadChallengesDevs';

export default function Challenges() {
    const [devs, setDevs] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadChallenges = async () => {
        const res = await loadChallengesDevs();

        setDevs(res.devs);
        setLoading(false);
    };

    useEffect(() => {
        loadChallenges();
    }, []);

    return (
        <>
            <Header />
            {!loading && (
                <S.Container>
                    <S.OptionsContainer>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://lgoesmontes.typeform.com/to/xKHESI"
                            alt="Criar novo desafio"
                        >
                            <S.Option>
                                <S.OptionIcon
                                    className="icon"
                                    icon={faLightbulb}
                                />

                                <S.OptionTitle>
                                    Submeter
                                    <br />
                                    novo desafio
                                </S.OptionTitle>
                            </S.Option>
                        </a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://discord.gg/yvYXhGj"
                            alt="Abrir convite no discord"
                        >
                            <S.Option>
                                <S.OptionIcon
                                    className="icon"
                                    icon={faComment}
                                />
                                <S.OptionTitle>
                                    Participar
                                    <br />
                                    da comunidade
                                </S.OptionTitle>
                            </S.Option>
                        </a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/Lorenalgm/DevChallenge"
                            alt="Abrir projeto no github"
                        >
                            <S.Option>
                                <S.OptionIcon
                                    className="icon"
                                    icon={faCodeBranch}
                                />
                                <S.OptionTitle>
                                    Contribuir
                                    <br />
                                    open source
                                </S.OptionTitle>
                            </S.Option>
                        </a>
                    </S.OptionsContainer>
                    <S.DevsContainer>
                        <h1>Últimas contribuições</h1>
                        <S.Devs>
                            {devs.map((dev) => (
                                <DevCard
                                    key={dev._id}
                                    name={dev.name}
                                    position={dev.position}
                                    avatar={dev.avatar}
                                    github={dev.github}
                                    linkedin={dev.linkedin}
                                />
                            ))}
                        </S.Devs>
                    </S.DevsContainer>
                </S.Container>
            )}
        </>
    );
}

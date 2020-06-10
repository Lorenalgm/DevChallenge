import React, { useEffect, useState } from 'react';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
    faLightbulb,
    faCodeBranch,
    faComment,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as S from './styled';

import api from '../../services/api';
import Header from '../../components/Header';
import Dev from '../../components/Dev';

export default function Community() {
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
                                    Submeter<br></br>novo desafio
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
                                    Participar<br></br>da comunidade
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
                                    Contribuir<br></br>open source
                                </S.OptionTitle>
                            </S.Option>
                        </a>
                    </S.OptionsContainer>
                    <S.DevsContainer>
                        <S.DevsTitle>Últimas contribuições</S.DevsTitle>
                        <S.Devs>
                            {devs.map((dev) => (
                                <Dev info={dev} />
                            ))}
                        </S.Devs>
                    </S.DevsContainer>
                </S.Container>
            )}
        </>
    );
}

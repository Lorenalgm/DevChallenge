import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import api from '../../services/api';
import DevCard from '../../components/DevCard';

import * as S from './styled';
import Header from '../../components/Header';
import { useChallenges } from '../../hooks/useChallenges';

const includes = [
    {
        id: 1,
        instruction:
            'Readme com instruções de requisitos e as rotas da aplicação',
    },
    {
        id: 2,
        instruction: 'Imagens para adicionar no projeto',
    },
    {
        id: 3,
        instruction: 'Modelo como design para utilizar como referência',
    },
    {
        id: 4,
        instruction: 'Arquivo contendo o texto que será utilizado',
    },
];

const starts = [
    {
        id: 1,
        steps: 'Clone o projeto com o código inicial',
    },
    {
        id: 2,
        steps: 'Leia as instruções disponíveis no readme',
    },
    {
        id: 3,
        steps: 'Inicie o desenvolvimento!',
    },
    {
        id: 4,
        steps: 'Compartilhe seus resultados com a comunidade',
    },
];

const colorMatch = {
    beginner: 'nephritis',
    intermediate: 'pumpkin',
    advanced: 'pomegranate',
    Mobile: 'blue',
    Frontend: 'red',
    Backend: 'light-purple',
};

export default function Detail() {
    const { challengesList } = useChallenges();
    const [challenge, setChallenge] = useState({});
    const [techs, setTechs] = useState([]);
    const [dev, setDev] = useState({});
    const [images, setImages] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
        async function loadChallenge() {
            console.log('response', challengesList, id);
            const response = challengesList.filter((item) => item.id === id);

            setChallenge(response[0]);
            // setDev(response.data.dev_id);
            setImages([response[0].background]);
            setTechs(response[0].techs);
        }

        loadChallenge();
    }, [id, challengesList]);

    return (
        <>
            <Header />
            <S.Container>
                <S.Banner>
                    <S.LeftColumn>
                        <S.TitleContainer>
                            <h1>{challenge?.name}</h1>
                        </S.TitleContainer>

                        <S.Infos>
                            {console.log(challenge)}
                            <S.InfosLevel color={colorMatch[challenge?.level]}>
                                {challenge?.level}
                            </S.InfosLevel>
                            <S.InfosLevel color={colorMatch[challenge?.type]}>
                                {challenge?.type}
                            </S.InfosLevel>
                            {techs?.map((item, idx) => (
                                <S.InfosTechs key={idx}>{item}</S.InfosTechs>
                            ))}
                        </S.Infos>

                        <S.ChallengeDescription>
                            {challenge?.description}
                        </S.ChallengeDescription>

                        <S.ChallengeLink
                            target="_blank"
                            rel="noopener noreferrer"
                            className="start-challenge"
                            href={challenge?.githubRepository}
                        >
                            Iniciar desafio
                        </S.ChallengeLink>
                    </S.LeftColumn>
                    <S.Demo>
                        <AwesomeSlider className="slider" bullets mobileTouch>
                            {images.map((image) => (
                                <div key={image} className="image">
                                    <img
                                        src={image}
                                        className="image"
                                        alt="Challenge"
                                    />
                                </div>
                            ))}
                        </AwesomeSlider>
                    </S.Demo>
                </S.Banner>

                <S.FlexContainer>
                    <S.Content>
                        <S.ChallengeAbout>
                            <h1>Sobre o desafio</h1>
                            <p>Seu desafio é {challenge?.brief}.</p>
                        </S.ChallengeAbout>
                        <S.ChallengeContainer>
                            <S.ChallengeInclude>
                                <h3>O que está incluso?</h3>

                                {challenge?.type === 'Backend' ? (
                                    <span>
                                        <S.Icon icon={faCheck} /> Readme com
                                        instruções de requisitos e as rotas da
                                        aplicação
                                    </span>
                                ) : (
                                    <>
                                        {includes.map((include) => (
                                            <span key={include.id}>
                                                <S.Icon icon={faCheck} />{' '}
                                                {include.instruction}
                                            </span>
                                        ))}
                                    </>
                                )}
                            </S.ChallengeInclude>
                            <S.ChallengeStart>
                                <h3>Como iniciar?</h3>
                                {starts.map((start) => (
                                    <p key={start.id}>
                                        <span>{start.id} - </span>
                                        {start.steps}
                                    </p>
                                ))}
                            </S.ChallengeStart>
                        </S.ChallengeContainer>
                    </S.Content>
                    <DevCard
                        name={challenge.username}
                        position={'Desenvolvedor'}
                        avatar={`https://github.com/${challenge.username}.png`}
                        github={`https://github.com/${challenge.username}`}
                        linkedin={''}
                    />
                </S.FlexContainer>
            </S.Container>
        </>
    );
}

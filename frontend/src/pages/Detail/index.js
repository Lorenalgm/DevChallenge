import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import DevCard from '../../components/DevCard';

import * as S from './styled';
import Header from '../../components/Header';
import loadChallengesById from '../../services/loadChallengesById';

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
    const [challenge, setChallenge] = useState({});
    const [techs, setTechs] = useState([]);
    const [dev, setDev] = useState({});
    const [images, setImages] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);

        // eslint-disable-next-line camelcase
        loadChallengesById({ id }).then(({ first_challenge }) => {
            setChallenge(first_challenge);
            setDev(first_challenge.dev_id);
            setImages(first_challenge.images);
            setTechs(first_challenge.techs);
        });
    }, [id]);

    return (
        <>
            <Header />
            <S.Container>
                <S.Banner>
                    <S.LeftColumn>
                        <S.TitleContainer>
                            <h1>{challenge.name}</h1>
                        </S.TitleContainer>

                        <S.Infos>
                            <S.InfosLevel color={colorMatch[challenge.level]}>
                                {challenge.level}
                            </S.InfosLevel>
                            <S.InfosLevel color={colorMatch[challenge.type]}>
                                {challenge.type}
                            </S.InfosLevel>
                            {techs[0]?.split(', ').map((item, idx) => (
                                <S.InfosTechs key={idx}>{item}</S.InfosTechs>
                            ))}
                        </S.Infos>

                        <S.ChallengeDescription>
                            {challenge.description}
                        </S.ChallengeDescription>

                        <S.ChallengeLink
                            target="_blank"
                            rel="noopener noreferrer"
                            className="start-challenge"
                            href={challenge.github_url}
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
                            <p>Seu desafio é {challenge.brief}.</p>
                        </S.ChallengeAbout>
                        <S.ChallengeContainer>
                            <S.ChallengeInclude>
                                <h3>O que está incluso?</h3>

                                {challenge.type === 'Backend' ? (
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
                        name={dev.name}
                        position={dev.position}
                        avatar={dev.avatar}
                        github={dev.github}
                        linkedin={dev.linkedin}
                    />
                </S.FlexContainer>
            </S.Container>
        </>
    );
}

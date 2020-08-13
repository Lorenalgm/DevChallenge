import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { useParams } from 'react-router-dom';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import DevCard from '../../components/DevCard';

import * as S from './styled';
import Header from '../../components/Header';

export default function Detail() {
    const [challenge, setChallenge] = useState([]);
    const [techs, setTechs] = useState([]);
    const [dev, setDev] = useState([]);
    const [images, setImages] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        async function loadChallenge() {
            const response = await api.get(`/challenges/${id}`);
            setChallenge(response.data[0]);
            setDev(response.data[0].dev_id);
            setImages(response.data[0].images);
        }

        loadChallenge();
    }, [id]);

    return (
        <>
            <S.Container>
                <S.Banner>
                    <S.LeftColumn>
                        <S.InfosType>{challenge.type}</S.InfosType>
                        <S.TitleContainer>
                            <h1>{challenge.name}</h1>
                        </S.TitleContainer>
                        <S.ChallengeDescription>
                            {challenge.description}
                        </S.ChallengeDescription>

                        <S.Infos>
                            <S.InfosLevel>{challenge.level}</S.InfosLevel>
                            {techs.map((item, id) => <S.InfosTechs key={id}>{item}</S.InfosTechs>)}
                        </S.Infos>

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
                        <AwesomeSlider
                            className="slider"
                            bullets={true}
                            mobileTouch={true}
                        >
                            {images.map((image) => (
                                <div key={image}><img src={image} alt="Challenge" /></div>
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
                                        <span>
                                            <S.Icon icon={faCheck} /> Readme com
                                            instruções de requisitos, cores e
                                            fontes
                                        </span>
                                        <span>
                                            <S.Icon icon={faCheck} /> Imagens
                                            para adicionar no projeto
                                        </span>
                                        <span>
                                            <S.Icon icon={faCheck} /> Modelo com
                                            o design para utilizar como
                                            referência
                                        </span>
                                        <span>
                                            <S.Icon icon={faCheck} /> Arquivo
                                            contendo o texto que será utilizado
                                        </span>
                                    </>
                                )}
                            </S.ChallengeInclude>
                            <S.ChallengeStart>
                                <h3>Como iniciar?</h3>
                                <p>
                                    <span>1 -</span> Clone o projeto com o
                                    código inicial
                                </p>
                                <p>
                                    <span>2 -</span> Leia as instruções
                                    disponíveis no readme
                                </p>
                                <p>
                                    <span>3 -</span> Inicie o desenvolvimento!
                                </p>
                                <p>
                                    <span>4 -</span> Compartilhe seus resultados
                                    com a comunidade
                                </p>
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

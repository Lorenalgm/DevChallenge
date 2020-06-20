import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import {useParams}  from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import * as S from './styled';
import Header from '../../components/Header';

export default function Detail() {
    const [challenge, setChallenge] = useState([]);
    const [dev, setDev] = useState([]);
    const [images, setImages] = useState([]);
    const {id} = useParams();

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
        <body>
            <Header />
            <S.Container>
                <S.LeftColumn>
                    <S.Infos>
                        <S.InfosTechs>{challenge.techs}</S.InfosTechs>
                        <S.InfosType>{challenge.type}</S.InfosType>
                        <S.InfosLevel>{challenge.level}</S.InfosLevel>

                    </S.Infos>
                    <AwesomeSlider className="slider" bullets={false} mobileTouch={true}>

                        {/* <div><img src={challenge.background} alt="Challenge" /></div> */}
                        {images.map((image) => (
                               <div><img src={image} alt="Challenge" /></div>
                            ))}
                    </AwesomeSlider>

                    <S.ChallengeLink
                        target="_blank"
                        rel="noopener noreferrer"
                        className="start-challenge"
                        href={challenge.github_url}
                    >
                        Iniciar desafio
                    </S.ChallengeLink>
                </S.LeftColumn>
                <S.FlexContainer>
                    <S.TitleContainer>
                        <h1>{challenge.name}</h1>
                    </S.TitleContainer>
                    <S.ChallengeDescription>
                        {challenge.description}
                    </S.ChallengeDescription>

                    <S.ChallengeContainer>
                        <p>Seu desafio é {challenge.brief}.</p>
                        <S.ChallengeInclude>
                            <h3>O que está incluso?</h3>
                            <span>
                                <S.Icon icon={faCheck} /> Readme com instruções
                                de requisitos, cores e fontes
                            </span>
                            <span>
                                <S.Icon icon={faCheck} /> Imagens para adicionar
                                no projeto
                            </span>
                            <span>
                                <S.Icon icon={faCheck} /> Modelo com o design
                                para utilizar como referência
                            </span>
                            <span>
                                <S.Icon icon={faCheck} /> Arquivo contendo o
                                texto que será utilizado
                            </span>
                        </S.ChallengeInclude>
                        <S.ChallengeStart>
                            <h3>Como iniciar?</h3>
                            <span>
                                1 - Clone o projeto com o código inicial
                            </span>
                            <span>
                                2 - Leia as instruções disponíveis no readme
                            </span>
                            <span>3 - Inicie o desenvolvimento!</span>
                            <span>
                                4 - Compartilhe seus resultados com a comunidade
                            </span>
                        </S.ChallengeStart>
                    </S.ChallengeContainer>

                    <S.DevContainer>
                        <img src={dev.avatar} alt="Dev" />
                        <S.DevInformation>
                            <S.DevName>{dev.name}</S.DevName>
                            <S.DevPosition>
                                {dev.position}
                            </S.DevPosition>
                        </S.DevInformation>
                        <S.DevSocialContainer>
                            {dev.github && (
                                <S.AnchorIcon
                                    className="icon"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href={`https://github.com/${dev.github}`}
                                >
                                    <FontAwesomeIcon icon={faGithubSquare} />
                                </S.AnchorIcon>
                            )}
                            {dev.linkedin && (
                                <S.AnchorIcon
                                    className="icon"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href={`https://www.linkedin.com/${dev.linkedin}`}
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </S.AnchorIcon>
                            )}
                        </S.DevSocialContainer>
                    </S.DevContainer>
                </S.FlexContainer>
            </S.Container>
        </body>
    );
}

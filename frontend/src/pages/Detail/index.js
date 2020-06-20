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
                            <S.InfosTechs>{challenge.techs}</S.InfosTechs>
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
                        <AwesomeSlider className="slider" bullets={false} mobileTouch={true}>
                            {images.map((image) => (
                                <div><img src={image} alt="Challenge" /></div>
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
                            <p>
                                <span>1 -</span> Clone o projeto com o código inicial
                            </p>
                            <p>
                                <span>2 -</span> Leia as instruções disponíveis no readme
                            </p>
                            <p><span>3 -</span> Inicie o desenvolvimento!</p>
                            <p>
                            <span>4 -</span> Compartilhe seus resultados com a comunidade
                            </p>
                        </S.ChallengeStart>
                    </S.ChallengeContainer>
                    </S.Content>
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

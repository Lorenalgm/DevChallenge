import React, { useState, useEffect } from 'react';

import DashboardDefault from '../../components/DashboardDefault';
import { ProgressBar } from '../../components/ChallengeCard/styled';
import ChallengeCard from '../../components/ChallengeCard';

import { Title, Section, Container } from './styled';

function MyChallenges() {
    const [challengesList, setChallengesList] = useState({
        inProgress: [
            {
                techs: ['CSS, React Native'],
                images: [
                    'https://i.imgur.com/nAsuQSs.png',
                    'https://i.imgur.com/A9sWFtn.png',
                ],
                _id: '5ec1cd5b9cd83622b185db7f',
                type: 'Mobile',
                name: 'Fisiotherapp',
                description: 'Ajude pacientes com exercícios de fisioterapia!',
                level: 'beginner',
                background: 'https://i.imgur.com/4FgywHQ.png',
                github_url: 'https://github.com/Lorenalgm/fisiotheapp',
                brief:
                    'criar um aplicativo em React Native para ajudar pessoas com exercícios de fisioterapia',
                dev_id: '5ec31e81e8051f63faefdf5e',
                createdAt: '2020-05-17T23:48:43.265Z',
                updatedAt: '2020-08-09T00:31:57.252Z',
                __v: 0,
            },
        ],
        complete: [
            {
                techs: ['CSS, React Native'],
                images: [
                    'https://i.imgur.com/nAsuQSs.png',
                    'https://i.imgur.com/A9sWFtn.png',
                ],
                _id: '5ec1cd5b9cd83622b185db7f',
                type: 'Mobile',
                name: 'Fisiotherapp',
                description: 'Ajude pacientes com exercícios de fisioterapia!',
                level: 'beginner',
                background: 'https://i.imgur.com/4FgywHQ.png',
                github_url: 'https://github.com/Lorenalgm/fisiotheapp',
                brief:
                    'criar um aplicativo em React Native para ajudar pessoas com exercícios de fisioterapia',
                dev_id: '5ec31e81e8051f63faefdf5e',
                createdAt: '2020-05-17T23:48:43.265Z',
                updatedAt: '2020-08-09T00:31:57.252Z',
                __v: 0,
            },
        ],
    });

    useEffect(() => {
        setChallengesList({
            inProgress: [
                {
                    techs: ['CSS, React Native'],
                    images: [
                        'https://i.imgur.com/nAsuQSs.png',
                        'https://i.imgur.com/A9sWFtn.png',
                    ],
                    _id: '5ec1cd5b9cd83622b185db7f',
                    type: 'Mobile',
                    name: 'Fisiotherapp',
                    description:
                        'Ajude pacientes com exercícios de fisioterapia!',
                    level: 'beginner',
                    background: 'https://i.imgur.com/4FgywHQ.png',
                    github_url: 'https://github.com/Lorenalgm/fisiotheapp',
                    brief:
                        'criar um aplicativo em React Native para ajudar pessoas com exercícios de fisiotepia',
                    dev_id: '5ec31e81e8051f63faefdf5e',
                    createdAt: '2020-05-17T23:48:43.265Z',
                    updatedAt: '2020-08-09T00:31:57.252Z',
                    __v: 0,
                },
            ],
            complete: [
                {
                    techs: ['CSS, React Native'],
                    images: [
                        'https://i.imgur.com/nAsuQSs.png',
                        'https://i.imgur.com/A9sWFtn.png',
                    ],
                    _id: '5ec1cd5b9cd83622b185db7f',
                    type: 'Mobile',
                    name: 'Fisiotherapp',
                    description:
                        'Ajude pacientes com exercícios de fisioterapia!',
                    level: 'beginner',
                    background: 'https://i.imgur.com/4FgywHQ.png',
                    github_url: 'https://github.com/Lorenalgm/fisiotheapp',
                    brief:
                        'criar um aplicativo em React Native para ajudar pessoas com exercícios de fisiotepia',
                    dev_id: '5ec31e81e8051f63faefdf5e',
                    createdAt: '2020-05-17T23:48:43.265Z',
                    updatedAt: '2020-08-09T00:31:57.252Z',
                    __v: 0,
                },
            ],
        });
    }, []);

    return (
        <DashboardDefault>
            <Container>
                <Title>Em andamento</Title>
                <Section>
                    {challengesList.inProgress.map((challenge) => (
                        <ChallengeCard
                            challenge={challenge}
                            progress={20}
                            buttonText="ver tarefas"
                            redirect={`myChallenges/todo/${challenge._id}`}
                        >
                            <ProgressBar />
                        </ChallengeCard>
                    ))}
                </Section>

                <Title>Concluídos</Title>

                <Section>
                    {challengesList.complete.map((challenge) => (
                        <ChallengeCard
                            challenge={challenge}
                            progress={100}
                            buttonText="ver tarefas"
                            redirect={`myChallenges/todo/${challenge._id}`}
                        >
                            <ProgressBar />
                        </ChallengeCard>
                    ))}
                </Section>
            </Container>
        </DashboardDefault>
    );
}

export default MyChallenges;

import React, { useEffect, useState } from 'react';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faLightbulb, faCodeBranch, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

            {!loading && (
                <div className="container">
                    <div className="section-options">
                        <a target="_blank" rel="noopener noreferrer" href="https://lgoesmontes.typeform.com/to/xKHESI" alt="Criar novo desafio">
                            <div>
                                <FontAwesomeIcon className="icon" icon={faLightbulb} />

                                <h2>Submeter<br></br>novo desafio</h2>
                            </div>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/yvYXhGj" alt="Abrir convite no discord">
                            <div>
                                <FontAwesomeIcon className="icon" icon={faComment} />
                                <h2>Participar<br></br>da comunidade</h2>
                            </div>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Lorenalgm/DevChallenge" alt="Abrir projeto no github">
                            <div>
                                <FontAwesomeIcon className="icon" icon={faCodeBranch} />
                                <h2>Contribuir<br></br>open source</h2>
                            </div>
                        </a>
                    </div>
                    <section className="devs-container">
                        <h1>Últimas contribuições</h1>
                        <section className="devs">
                            {devs.map((dev) => (
                                <div className="dev-individual-container" key={dev._id}>
                                    <img src={dev.avatar} alt="Dev" />
                                    <div className="dev-information">
                                        <span className="dev-name">{dev.name}</span>
                                        <span className="dev-position">
                                            {dev.position}
                                        </span>
                                    </div>
                                    <div className="dev-social-media">
                                        {dev.github && (
                                            <a
                                                className="icon"
                                                rel="noopener noreferrer"
                                                target="_blank"
                                                href={`https://github.com/${dev.github}`}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faGithubSquare}
                                                />
                                            </a>
                                        )}
                                        {dev.linkedin && (
                                            <a
                                                className="icon"
                                                rel="noopener noreferrer"
                                                target="_blank"
                                                href={`https://www.linkedin.com/${dev.linkedin}`}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faLinkedin}
                                                />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </section>
                    </section>
                </div>
            )}
        </body>
    );
}

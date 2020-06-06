import React, { useEffect, useState } from 'react';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles.css';
import api from '../../services/api';
import Header from '../../components/Header';

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
        <body>
            <Header />

            <div className="container">
                {!loading && (
                    <section className="devs">
                        {devs.map((dev) => (
                            <div className="dev-container" key={dev._id}>
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
                )}
                <div className="help">
                    <h3>Deseja contribuir?</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="new-challenge"
                        href="https://lgoesmontes.typeform.com/to/xKHESI"
                    >
                        Submeter novo desafio
                    </a>
                </div>
            </div>
        </body>
    );
}

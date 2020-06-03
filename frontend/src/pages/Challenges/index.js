import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import api from '../../services/api';
import Header from '../../components/Header';
import ChallengesSkeleton from '../../components/ChallengesSkeleton';

export default function Challenges() {
    const [challenges, setChallenges] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadChallenges() {
            const response = await api.get('/challenges');
            // console.log(response.data);
            setChallenges(response.data);

            setLoading(false);
        }

        loadChallenges();
    }, []);

    return (
        <body>
            <Header />
            {loading && <ChallengesSkeleton cards={6} />}
            {!loading && (
                <section className="challenges">
                    {challenges.map((challenge) => (
                        <div className="challenge-card" key={challenge._id}>
                            <Link
                                className="link"
                                to={{
                                    pathname: `detail/${challenge._id}`,
                                    challenge: challenge,
                                }}
                            >
                                <div className="card-image-container">
                                    <img
                                        src={challenge.background}
                                        alt=""
                                    ></img>
                                </div>
                                <div className="card-content">
                                    <h1 className="card-title">
                                        {challenge.name}
                                    </h1>
                                    <p>{challenge.description}</p>
                                </div>
                                <div className="card-tech">
                                    <p className="tech">
                                        {challenge.techs.join(', ')}
                                    </p>
                                    <p className="level">{challenge.level}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </section>
            )}
        </body>
    );
}

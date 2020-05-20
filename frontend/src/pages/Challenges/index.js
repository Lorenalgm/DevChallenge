import React, { useEffect, useState } from 'react';
import './styles.css';
import api from '../../services/api';
import Header from '../../components/Header';

export default function Challenges() {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    async function loadChallenges() {
      const response = await api.get('/challenges');
      console.log(response.data);
      setChallenges(response.data);
    }

    loadChallenges();
  }, []);

  return (
    <body>
      <Header />
      <section className="challenges">

        {challenges.map(challenge => (
          <div className="challenge-card" key={challenge._id}>
            <div className="card-image-container">
              <img src={challenge.background} alt=""></img>
            </div>
            <div className="card-content">
              <h1 className="card-title">{challenge.name}</h1>
              <p>{challenge.description}</p>
            </div>
            <div className="card-tech">
              <p className="tech">{challenge.techs.join(', ')}</p>
              <p className="level">{challenge.level}</p>
            </div>
          </div>
        ))}

      </section>
    </body>
  )
}
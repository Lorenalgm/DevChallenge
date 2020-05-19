import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.svg';
import './styles.css';
import api from '../../services/api';

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
      <header>
        <nav>
          <ul>
            <li><span>2020</span></li>
            <li>Challenges</li>
          </ul>
        </nav>
        <div className="title">
          <h1>Dev<span>Challenge</span></h1>
        </div>
      </header>

      <section className="challenges">

        {challenges.map(challenge => (
          <div className="challenge-card" key={challenge._id}>
            <div className="card_img_container">
              <img src={challenge.background} alt=""></img>
            </div>
            <div className="card_content">
              <p className="card_title">{challenge.name}</p>
              <p>{challenge.description}</p>
            </div>
            <div className="card_tech">
              <p className="tech">{challenge.techs.join(', ')}</p>
              <p className="level">{challenge.level}</p>
            </div>
          </div>
        ))}

      </section>
    </body>
  )
}
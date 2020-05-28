import React from 'react';
import './styles.css';
import Header from '../../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Detail(props) {
  const challenge = props.location.challenge;

  return (
    <body>
      <Header />
      <div className="container">
        <div className="left-container">
          <div className="stack">
            <div className="challenge-techs">{challenge.techs}</div>
            <div className="challenge-level">{challenge.level}</div>
          </div>
          <img src={challenge.background} alt="Challenge" />
          <a target="_blank" rel="noopener noreferrer" className="start-challenge" href={challenge.github_url}>Start challenge</a>
          <button className="more">More</button>
          {/* <div>{challenge.images}</div> */}
        </div>
        <div className="principal-container">
          <div className="challenge">
            <h1>{challenge.name}</h1>
            <div className="challenge-type">{challenge.type}</div>
          </div>
          <h2>{challenge.description}</h2>
          <p>{challenge.brief}</p>
          <div className="dev-container">
            <img src={challenge.dev_id.avatar} alt="Dev" />
            <div className="dev-information">
              <span className="dev-name">{challenge.dev_id.name}</span>
              <span className="dev-position">{challenge.dev_id.position}</span>
            </div>
            <div className="dev-social-media">
              {challenge.dev_id.github &&
                <a className="icon" rel="noopener noreferrer" target="_blank" href={`https://github.com/${challenge.dev_id.github}`}>
                  <FontAwesomeIcon icon={faGithubSquare} />
                </a>}
              {challenge.dev_id.linkedin &&
                <a className="icon" rel="noopener noreferrer" target="_blank" href={`https://www.linkedin.com/in/${challenge.dev_id.linkedin}`}>
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>}
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}
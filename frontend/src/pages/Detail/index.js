import React from 'react';
import './styles.css';
import Header from '../../components/Header';

export default function Detail(props) {
  const challenge = props.location.challenge;
  

  return (
    <body>
      <Header />
      <div className="container">
        <div className="left-container">
          <img src={challenge.background} alt="Challenge" />
          <a target="_blank" rel="noopener noreferrer" className="start-challenge" href={challenge.github_url}>Start challenge</a>
          <button className="more">More</button>
          {/* <div>{challenge.images}</div> */}
          <div className="stack">
            <div>{challenge.level}</div>
            <div>{challenge.techs}</div>
            <div>{challenge.type}</div>
          </div>
        </div>
        <div className="principal-container">
          <h1>{challenge.name}</h1>
          <h2>{challenge.description}</h2>
          <p>{challenge.brief}</p>
        </div>
      </div>
    </body>
  )
}
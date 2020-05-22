import React from 'react';
import './styles.css';
import Header from '../../components/Header';


export default function Detail(props) {
  const challenge = props.location.challenge;
  
  return (
    <body>
      <Header />
      <div>
        <img src={challenge.background} alt="Challenge" />
        <h1>{challenge.type}</h1>
        <h1>{challenge.github_url}</h1>
        <h1>{challenge.level}</h1>
        <h1>{challenge.techs}</h1>
        <h1>{challenge.images}</h1>
      </div>
      <div>
        <h1>{challenge.name}</h1>
        <h1>{challenge.description}</h1>
        <h1>{challenge.brief}</h1>
        <div>
          <h1>{challenge.dev_id}</h1>
        </div>
      </div>
    </body>
  )
}
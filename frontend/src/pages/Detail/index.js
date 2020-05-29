import React from 'react';
import './styles.css';
import Header from '../../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

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
            <div className="challenge-type">{challenge.type}</div>
          </div>
          <AwesomeSlider bullets={false} mobileTouch={true}>
            <div data-src={challenge.background} />
            {/* <div><img src={challenge.background} alt="Challenge" /></div> */}
          </AwesomeSlider>
          
          <a target="_blank" rel="noopener noreferrer" className="start-challenge" href={challenge.github_url}>Iniciar desafio</a>
        </div>
        <div className="principal-container">
          <div className="challenge">
            <h1>{challenge.name}</h1>
          </div>
            <h2>{challenge.description}</h2>

            <div className="content">
              <p>Seu desafio é {challenge.brief}.</p>
              <div className="challenge-include">
                <h3>O que está incluso?</h3>
                <span><FontAwesomeIcon icon={faCheck} className="icon" />  Readme com instruções de requisitos, cores e fontes</span>
                <span><FontAwesomeIcon icon={faCheck} className="icon" />  Imagens para adicionar no projeto</span>
                <span><FontAwesomeIcon icon={faCheck} className="icon" />  Modelo com o design para utilizar como referência</span>
                <span><FontAwesomeIcon icon={faCheck} className="icon" />  Arquivo contendo o texto que será utilizado</span>
              </div>
              <div className="challenge-start">
                <h3>Como iniciar?</h3>
                <span>1 - Clone o projeto com o código inicial</span>
                <span>2 - Leia as instruções disponíveis no readme</span>
                <span>3 - Inicie o desenvolvimento!</span>
                <span>4 - Compartilhe seus resultados com a comunidade</span>
              </div>
            </div> 
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
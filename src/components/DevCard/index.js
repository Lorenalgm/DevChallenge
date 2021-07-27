import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import * as S from './styled';

function DevCard(props) {
  return (
    <S.Card>
      <img src={props.avatar} alt={`Avatar: ${props.name}`} />
      <S.Infos>
        <h1>{props.name}</h1>
        <span>{props.position}</span>
      </S.Infos>
      <S.Social>
        {props.github && (
          <S.Anchor
            className="icon"
            rel="noopener noreferrer"
            target="_blank"
            href={`https://github.com/${props.github}`}
          >
            <FontAwesomeIcon icon={faGithubSquare} />
          </S.Anchor>
        )}
        {props.linkedin && (
          <S.Anchor
            className="icon"
            rel="noopener noreferrer"
            target="_blank"
            href={`https://www.linkedin.com/${props.linkedin}`}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </S.Anchor>
        )}
      </S.Social>
    </S.Card>
  );
}

export default DevCard;

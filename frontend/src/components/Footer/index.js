import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faDiscord, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

import * as S from './styled';

function Footer() {
  return (
      <S.Container>
          <S.Social>
              <S.Anchor
                      className="icon"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={`https://www.instagram.com/devchallenge`}
                  >
                <FontAwesomeIcon icon={faInstagram} />
              </S.Anchor>
              <S.Anchor
                      className="icon"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={`https://discord.gg/yvYXhGj`}
                  >
                <FontAwesomeIcon icon={faDiscord} />
              </S.Anchor>
              <S.Anchor
                      className="icon"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={`https://twitter.com/dev_challenge`}
                  >
                <FontAwesomeIcon icon={faTwitter} />
              </S.Anchor>
              <S.Anchor
                      className="icon"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={`https://github.com/devchallenge-io`}
                  >
                <FontAwesomeIcon icon={faGithub} />
              </S.Anchor>
          </S.Social>
          <S.Title>
            Dev<span>Challenge</span>
          </S.Title>
      </S.Container>
  );
}

export default Footer;
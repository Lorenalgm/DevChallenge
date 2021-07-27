import React, { useEffect, useState } from 'react';
import {
  faLightbulb,
  faCodeBranch,
  faComment,
} from '@fortawesome/free-solid-svg-icons';

import * as S from './styled';

import api from '../../services/api';

import DevCard from '../../components/DevCard';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

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
    <>
      <Header />
      <S.Container>
        <S.OptionsContainer>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://lgoesmontes.typeform.com/to/xKHESI"
            alt="Criar novo desafio"
          >
            <S.Option>
              <S.OptionIcon className="icon" icon={faLightbulb} />

              <S.OptionTitle>
                Submeter
                <br />
                novo desafio
              </S.OptionTitle>
            </S.Option>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://discord.gg/yvYXhGj"
            alt="Abrir convite no discord"
          >
            <S.Option>
              <S.OptionIcon className="icon" icon={faComment} />
              <S.OptionTitle>
                Participar
                <br />
                da comunidade
              </S.OptionTitle>
            </S.Option>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Lorenalgm/DevChallenge"
            alt="Abrir projeto no github"
          >
            <S.Option>
              <S.OptionIcon className="icon" icon={faCodeBranch} />
              <S.OptionTitle>
                Contribuir
                <br />
                open source
              </S.OptionTitle>
            </S.Option>
          </a>
        </S.OptionsContainer>
        {!loading && (
          <S.DevsContainer>
            <h1>Últimas contribuições</h1>
            <S.Devs>
              {devs.map((dev) => (
                <DevCard
                  key={dev._id}
                  name={dev.name}
                  position={dev.position}
                  avatar={dev.avatar}
                  github={dev.github}
                  linkedin={dev.linkedin}
                />
              ))}
            </S.Devs>
          </S.DevsContainer>
        )}
      </S.Container>
      <Footer />
    </>
  );
}

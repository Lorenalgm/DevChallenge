import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import Header from '../../components/Header';

import goldCrown from '../../assets/gold-crown.svg';
import silverCrown from '../../assets/silver-crown.svg';
import bronzeCrown from '../../assets/bronze-crown.svg';

import * as R from './styled';

import fakeData from './fake-data';

function Ranking() {
    return (
        <>
            <Header />

            <R.Head>
                <R.Title>Top 10</R.Title>
                <R.Description>
                    Desenvolvedores com mais desafios concluídos
                </R.Description>
                <R.Top3>
                    {fakeData.ranking
                        .filter((item) => item.rank < 4)
                        .map(
                            ({
                                rank,
                                name,
                                image,
                                position,
                                github,
                                linkedin,
                                score,
                            }) => (
                                <R.Top3Card key={rank}>
                                    <img
                                        src={
                                            rank === 1
                                                ? goldCrown
                                                : rank === 2
                                                ? silverCrown
                                                : bronzeCrown
                                        }
                                        alt="Coroa"
                                    />
                                    <R.Avatar
                                        width="140px"
                                        height="140px"
                                        src={image}
                                        alt={name}
                                    />
                                    <R.Score top3>
                                        {score}
                                        <sub>/100</sub>
                                    </R.Score>
                                    <h3>{name}</h3>
                                    <p>{position}</p>
                                    <R.Top3SocialMedias>
                                        <a href={github} target="BLANK">
                                            <FontAwesomeIcon icon={faGithub} />
                                        </a>
                                        <a href={linkedin} target="BLANK">
                                            <FontAwesomeIcon
                                                icon={faLinkedin}
                                            />
                                        </a>
                                    </R.Top3SocialMedias>
                                    <R.RankIcon>{rank}</R.RankIcon>
                                </R.Top3Card>
                            )
                        )}
                </R.Top3>
            </R.Head>

            <R.List>
                {fakeData.ranking
                    .filter((item) => item.rank >= 4)
                    .map(({ rank, name, image, position, score }) => (
                        <R.ListItem key={rank}>
                            <section>
                                <section>
                                    <R.Avatar
                                        width="80px"
                                        height="80"
                                        src={image}
                                        alt="Avatar"
                                    />
                                    <R.ListRankIcon>{rank}</R.ListRankIcon>
                                </section>
                                <section>
                                    <h3>{name}</h3>
                                    <p>{position}</p>
                                </section>
                            </section>
                            <R.Score>
                                {score}
                                <sub>/100</sub>
                            </R.Score>
                        </R.ListItem>
                    ))}
            </R.List>
        </>
    );
}

export default Ranking;

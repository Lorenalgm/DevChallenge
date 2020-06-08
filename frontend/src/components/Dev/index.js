import React from 'react';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as S from './styled';

export default function Dev(props) {
    const { info } = props;

    return (
        <S.DevContainer>
            <img src={info.avatar} alt="Dev" />
            <S.DevInformation>
                <S.DevName>{info.name}</S.DevName>
                <S.DevPosition>{info.position}</S.DevPosition>
            </S.DevInformation>
            <S.DevSocialContainer>
                {info.github && (
                    <S.AnchorIcon
                        className="icon"
                        rel="noopener noreferrer"
                        target="_blank"
                        href={`https://github.com/${info.github}`}
                    >
                        <FontAwesomeIcon icon={faGithubSquare} />
                    </S.AnchorIcon>
                )}
                {info.linkedin && (
                    <S.AnchorIcon
                        className="icon"
                        rel="noopener noreferrer"
                        target="_blank"
                        href={`https://www.linkedin.com/in/${info.linkedin}`}
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </S.AnchorIcon>
                )}
            </S.DevSocialContainer>
        </S.DevContainer>
    );
}

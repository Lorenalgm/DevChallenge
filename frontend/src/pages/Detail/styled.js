import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import media from 'styled-media-query';
export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 16px;
    flex: 1;
    max-width: 1200px;
    margin: 0px auto;

    @media (max-width: 992px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin: 0%;
        margin-top: 5%;
    }
`;

export const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;

    @media (min-width: 992px) {
        margin-bottom: 0px;
        margin-right: 24px;
    }
`;

export const Infos = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-bottom: 1em;
`;

export const InfosTechs = styled.div`
    filter: brightness(60%);
    width: 9em;
    border-radius: 20px;
    text-align: center;
    font-weight: bold;
    color: #fff;

    ${media.lessThan('medium')`
        width: 7em;
    `}
`;

export const InfosLevel = styled.div`
    background-color: #5c0d78;
    filter: brightness(90%);
    width: 9em;
    padding: 5px;
    border-radius: 20px;
    text-align: center;
    font-weight: bold;
    color: #fff;

    ${media.lessThan('medium')`
        background-color: #5c0d78;
        filter: brightness(90%);
        width: 6em;
    `}
`;

export const InfosType = styled.div`
    filter: brightness(90%);
    width: 10em;
    border-radius: 20px;
    text-align: center;
    font-weight: bold;
    color: #fff;
    ${media.lessThan('medium')`
        width: 5em;
    `};
`;

export const ChallengeLink = styled.a`
    color: #ffff;
    background-color: #5c0d78;
    width: 20em;
    height: 3em;
    border: 1px solid #000000;
    font-weight: bold;
    font-size: 20px;
    border-radius: 50px;
    cursor: pointer;
    transition: 0.3s;
    margin: 4%;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: #490861;
    }

    ${media.lessThan('medium')`
        width: 15em;
        height: 3em;
        margin: 0;
        margin-top: 5%;
        margin-bottom: 2%;
    `}
`;

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;

    ${media.lessThan('medium')`
        align-items: center;
        justify-content: center;
        max-width: 100%;
    `}
`;

export const TitleContainer = styled.div`
    display: flex;

    h1 {
        color: var(--color-yellow);
        text-align: center;
    }
`;

export const ChallengeDescription = styled.div`
    color: #ffff;
    font-size: 1.2em;

    ${media.lessThan('medium')`
        text-align: center;
        margin-bottom: 4%;
    `}
`;

export const ChallengeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: initial;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1%;
    p {
        color: #fff;
    }

    ${media.lessThan('medium')`
        margin-left: 2%;
        text-align: left;
        align-items: center;
        justify-content: center;
        margin-left: 10%;
        margin-right: 10%;
        margin-bottom: 1%;

        p{
            text-align: center;
        }
    `}
`;

export const ChallengeInclude = styled.div`
    display: flex;
    flex-direction: column;

    h3 {
        color: var(--color-purple);
        margin-top: 0.3em;
        padding: 0.2em;
        font-size: 1.6em;
    }

    span {
        color: #ffff;
        padding: 0.2em;
    }
`;

export const Icon = styled(FontAwesomeIcon)`
    color: greenyellow;
`;

export const ChallengeStart = styled.div`
    display: flex;
    flex-direction: column;

    h3 {
        color: var(--color-purple);
        padding: 0.2em;
        margin-top: 0.3em;
        font-size: 1.6em;
    }

    span {
        color: #ffff;
        padding: 0.2em;
    }
`;

export const DevContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #2c2929;
    border-radius: 1em;
    margin: 1em;
    height: 5em;
    width: 20em;
    justify-content: center;

    img {
        height: 50px;
        width: 50px;
        border-radius: 2em;
    }
`;

export const DevInformation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
`;

export const DevName = styled.span`
    font-size: 18px;
    color: #ffff;
`;

export const DevPosition = styled.span`
    font-weight: bold;
    font-size: 12px;
    color: #ffff;
`;

export const DevSocialContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const AnchorIcon = styled.a`
    text-decoration: none;
    color: #ffff;
    padding: 2px;
`;

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import media from 'styled-media-query';
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 2%;
    flex: 1;

    ${media.lessThan('medium')`
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin: 0%;
        margin-top: 5%;
    `}
`;

export const Banner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3em;

    ${media.lessThan('medium')`
        flex-wrap: wrap-reverse;
    `}
`;

export const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    width: 40%;
    text-align: left;

    ${media.lessThan('medium')`
        display: flex;
        width: 100%;
        margin-top: 8%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `}
`;


export const InfosType = styled.div`
    filter: brightness(90%);
    width: 10em;
    border-radius: 20px;
    text-align: left;
    font-weight: bold;
    margin-left: 4%;
    margin-bottom: 1%;
    color: var(--purple);
    ${media.lessThan('medium')`
        margin: 0;
        width: 5em;
    `};
`;


export const TitleContainer = styled.div`
    margin-left: 4%;
    margin-bottom: 1%;
    h1 {
        color: var(--yellow);
        text-align: left;
    }

    ${media.lessThan('medium')`
        margin: 0;
        margin-top: 4%;
        text-align: center;
    `}
`;

export const ChallengeDescription = styled.div`
    color: var(--white);
    font-size: 1.2em;
    margin-left: 4%;
    margin-bottom: 4%;

    ${media.lessThan('medium')`
        text-align: center;
        margin-left: 0;
        margin-top: 2%;
        margin-bottom: 4%;
    `}
`;

export const Infos = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
`;

export const InfosLevel = styled.div`
    background-color: var(--gray);
    filter: brightness(90%);
    width: 7em;
    padding: 5px;
    margin-left: 4%;
    border-radius: 20px;
    text-align: center;
    font-weight: bold;
    color: var(--white);
    ${media.lessThan('medium')`
        width: 6em;
        margin-left: 0;
    `}
`;

export const InfosTechs = styled.div`
    background-color: var(--gray);
    filter: brightness(90%);
    width: 7em;
    padding: 5px;
    margin-left: 4%;
    border-radius: 20px;
    text-align: center;
    font-weight: bold;
    color: var(--white);
    ${media.lessThan('medium')`
        width: 6em;
        margin-left: 0;
    `}
`;

export const ChallengeLink = styled.a`
    color: var(--white);
    background-color: var(--purple);
    width: 20em;
    height: 3em;
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
        background-color: var(--dark-purple);
    }

    ${media.lessThan('medium')`
        width: 15em;
        height: 3em;
        margin: 0;
        margin-top: 5%;
        margin-bottom: 2%;
    `}
`;

export const Demo = styled.div`
    width: 50em;
    height: 30em;

    .slider{
        width: 100%;
        height: 100%;
    }

    ${media.lessThan('medium')`
        width: 80%;
        height: 100%;
    `}
`;

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${media.lessThan('medium')`
        align-items: center;
        justify-content: center;
        max-width: 100%;
    `}
`;

export const Content = styled.div`
    margin-top: 3%;
`;

export const ChallengeAbout = styled.div`
    width: 100%;
    margin-top: 5%;
    margin-bottom: 4%;
    text-align: left;

    h1 {
        color: var(--purple);
        font-size: 1.6em;
    }

    p {
        margin-top: 1%;
        color: var(--white);
    }

    ${media.lessThan('medium')`
        align-items: center;
        justify-content: center;
        margin-left: 4%;
        margin-right: 4%;
        max-width: 95%;
    `}
`;


export const ChallengeContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1.5em;
    margin-bottom: 4%;
    p {
        color: var(--white);
    }

    ${media.lessThan('medium')`
        text-align: left;
        flex-wrap: wrap;
    `}
`;

export const ChallengeInclude = styled.div`
    display: flex;
    margin-right: 8%;
    flex-direction: column;

    h3 {
        color: var(--purple);
        margin-top: 0.3em;
        padding: 0.2em;
        font-size: 1.6em;
    }

    span {
        color: var(--white);
        padding: 0.2em;
    }

    ${media.lessThan('medium')`
        margin-right:0;
    `}
`;

export const Icon = styled(FontAwesomeIcon)`
    color: var(--green);
`;

export const ChallengeStart = styled.div`
    display: flex;
    flex-direction: column;

    h3 {
        color: var(--purple);
        padding: 0.2em;
        margin-top: 0.3em;
        font-size: 1.6em;
    }

    p {
        color: var(--white);
        padding: 0.2em;
    }

    span{
        color: var(--yellow);
        font-weight: bold;
    }

`;

export const DevContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: var(--gray);
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
    color: var(--white);
`;

export const DevPosition = styled.span`
    font-weight: bold;
    font-size: 12px;
    color: var(--white);
`;

export const DevSocialContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const AnchorIcon = styled.a`
    text-decoration: none;
    color: var(--white);
    padding: 2px;
`;

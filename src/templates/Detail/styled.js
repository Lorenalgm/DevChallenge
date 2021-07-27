import styled from 'styled-components';
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
        margin-left: 0;
        margin-right: 0;
    `}

  ${media.lessThan('small')`
        margin-right: 4%;
        margin-left: 4%;
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
        text-align: center;
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
        text-align: left;
        margin-left: 0;
        margin-top: 2%;
        margin-bottom: 4%;
    `}
`;

export const Infos = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: left;
  padding: 0 4%;
  font-size: 14px;
  margin-bottom: 10px;

  ${media.lessThan('medium')`
        align-items: start;
        width: 100%;
        padding: 0;
    `}
`;

export const InfosLevel = styled.div`
  background-color: var(--${(props) => props.color});
  filter: brightness(90%);
  padding: 7px 15px;
  margin-right: 2%;
  margin-bottom: 2%;
  border-radius: 20px;
  text-align: center;
  font-weight: bold;
  color: var(--white);
`;

export const InfosTechs = styled.div`
  background-color: var(--quaternary);
  filter: brightness(90%);
  padding: 7px 15px;
  margin-right: 2%;
  margin-bottom: 2%;
  border-radius: 20px;
  text-align: center;
  font-weight: bold;
  color: var(--white);
`;

export const ChallengeLink = styled.a`
  color: var(--white);
  background-color: var(--purple);
  width: 15em;
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
        margin: 0;
        margin-top: 5%;
        margin-bottom: 2%;
    `}

  ${media.between('large', 'huge')`
        width: 20em;
    `}
`;

export const Demo = styled.div`
  width: 47em;
  border-radius: 10px;

  .image {
    height: 100%;
  }

  .slider {
    width: 100%;
    height: 100%;
  }

  .awssld__wrapper {
    border-radius: 10px;
  }

  .awssld__bullets {
    bottom: 0;
    z-index: 9999;
    padding: 10px 0;
    transition: 0.4s;
  }

  .awssld__bullets:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }

  .awssld__bullets button {
    border: 3px solid var(--yellow);
    background-color: rgba(0, 0, 0, 0);
  }

  .awssld__bullets .awssld__bullets--active {
    background-color: var(--yellow);
  }

  .image {
    height: 100%;
    width: 100%;
  }

  ${media.lessThan('medium')`
        width: 90%;
        height: 100%;
        margin-bottom: 20px;
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
    display: block;
  }

  ${media.lessThan('medium')`
        margin-right: 0;
    `}

  ${media.lessThan('small')`
        margin-right: 4%;
        margin-left: 4%;
    `}
`;

export const IconContainer = styled.div`
  color: var(--green);
  margin: 4px 4px 0 0;
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

  span {
    color: var(--yellow);
    font-weight: bold;
    margin: 0;
    padding: 0;
  }

  ${media.lessThan('small')`
        margin-right: 4%;
        margin-left: 4%;
    `}
`;

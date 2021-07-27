import styled from 'styled-components';

export const Anchor = styled.a`
  text-decoration: none;
  cursor: pointer;

  color: var(--white-gray);
`;

export const Level = styled.span`
  background-color: var(--${(props) => props.color});
  padding: 6px 16px;
  font-size: 11px;
  height: 23px;
  border-radius: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const ChallengeCard = styled.div`
  height: 350px;
  width: 300px;

  background-color: var(--secondary);
  border-radius: 16px;

  margin: 1em 1em 1em 1em;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  overflow: hidden;
`;

export const CardImage = styled.div`
  overflow: hidden;
  height: 150px;
  width: 300px;
  background-color: #2b3035;

  img {
    transition: 0.3s;
    width: 100%;
  }
  img:hover {
    transform: scale(1.1);
  }
`;

export const CardContent = styled.div`
  margin-top: 10px;
  color: var(--white-gray);
  text-align: center;
  width: 100%;
  padding: 0 16px;

  h1 {
    font-size: 25px;
    margin-top: 0px;
    font-weight: 500;
  }

  p {
    margin-top: 10px;
  }
`;

export const CardTechs = styled.div`
  position: absolute;
  right: 0;
  top: 16px;
  padding: 0 16px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  z-index: 999;
  .tech {
    background-color: var(--quaternary);
    padding: 5px 15px;
    margin-bottom: 5px;
    border-radius: 25px;
    text-align: center;
    font-weight: bold;
    color: var(--white);
    align-items: center;
    font-size: 13px;
  }

  .level {
    color: var(--yellow);
    font-weight: bold;
  }
`;

export const CardPlatforms = styled.div`
  position: absolute;
  left: 0;
  top: 16px;
  padding: 0 16px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  z-index: 999;
`;

export const Button = styled.button`
  width: 80%;
  height: 46px;

  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);

  background: var(--purple);
  color: var(--white);
  font-weight: bold;
  font-size: 18px;

  border-radius: 50px;

  cursor: pointer;

  transition: 0.25s;

  &:hover {
    width: 83%;
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: var(--quinary);

  &::after {
    position: absolute;
    content: ' ';
    width: ${(props) => `${props.progress}%`};
    height: 8px;
    background: var(--green);
    border-radius: 0 5px 5px 0;
  }
`;

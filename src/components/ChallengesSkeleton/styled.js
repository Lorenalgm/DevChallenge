import styled from 'styled-components';

export const Section = styled.section`
  margin-top: 3%;
  display: flex;
  flex-wrap: wrap;
  max-width: 100vw;
  align-items: center;
  justify-content: center;
`;

export const ChallengeSkeleton = styled.div`
  border-radius: 16px;
  cursor: pointer;

  height: 350px;
  width: 300px;
  margin: 0 0.5em 1em 0.5em;

  overflow: hidden;
`;

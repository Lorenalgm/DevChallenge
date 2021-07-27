import styled from 'styled-components';
import media from 'styled-media-query';

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 160px;
  margin-bottom: 160px;
  ${media.lessThan('medium')`
        margin-top: 14%;
        margin-bottom: 14%;
        margin-left: 3%;
        margin-right: 3%;
    `}
`;

export const BannerTitle = styled.h1`
  color: var(--white);
  font-size: 60px;
`;

export const BannerSubtitle = styled.h2`
  color: var(--yellow);
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 20px;

  ${media.lessThan('medium')`
        font-size: 1em;
    `}
`;

export const BannerButton = styled.button`
  color: var(--white);
  background-color: var(--purple);
  width: 250px;
  height: 60px;
  font-weight: bold;
  font-size: 20px;
  border-radius: 50px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: var(--dark-purple);
  }
`;

export const Typewriter = styled.div`
  h1 {
    color: var(--white);
    overflow: hidden;
    border-right: 0.15em solid var(--purple);
    white-space: nowrap;
    letter-spacing: 0.02em;
    animation: typing 3.5s steps(30, end), blink-caret 0.5s step-end infinite;

    ${media.lessThan('medium')`
            font-size: 1.8em;
        `}
  }
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: var(--purple);
    }
  }
`;

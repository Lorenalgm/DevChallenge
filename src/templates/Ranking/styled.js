import styled from 'styled-components';
import media from 'styled-media-query';

import bg from '../../assets/trophies-bg.svg';

const tools = {
  cardsTitle: `
        font-size: 24px;
        font-weight: 700;
        line-height: 28px;
        color: white;
    `,

  cardsText: `
        font-size: 14px;
        font-weight: 500;
        line-height: 16px;
        color: var(--yellow);
    `,
};

export const Head = styled.section`
  display: flex;
  flex-direction: column;

  padding: 48px 80px 80px 80px;
  margin: 86px 0 35px 0;

  background: url(${bg}) var(--primary);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  ${media.between('medium', 'large')`
        padding: 48px 60px 60px 60px;
    `}

  ${media.lessThan('medium')`
        display: flex;
        flex-direction: column;
        padding: 48px 0 0 0;
        position: relative;
        width: 100%;
        margin: 0 auto;
    `}
`;

export const Title = styled.h2`
  font-size: 72px;
  line-height: 84px;
  text-align: center;

  margin-bottom: 24px;
  align-self: center;

  color: var(--white);

  ${media.lessThan('medium')`
        font-size: 48px;
    `}
`;

export const Description = styled.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.5em;
  text-align: center;

  color: var(--yellow);
  align-self: center;

  margin-bottom: 73px;
`;

export const Top3 = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: 'top2 top1 top3';
  justify-content: center;
  height: 570px;
  column-gap: 66px;

  ${media.lessThan('medium')`
        display: flex;
        flex-direction: column;
        align-content: center;
        width: 100%;
        height: auto;
    `}

  ${media.lessThan('large')`
        column-gap: 24px;
    `}
`;

export const Top3Card = styled.article`
  background: var(--dark-hover);
  border-radius: 20px;
  border: 1px solid rgba(244, 207, 10, 0.18);
  box-shadow: 0 0 0 10px var(--dark-hover);
  box-sizing: border-box;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;

  padding: 6px 109px 42px 109px;
  justify-self: start;

  ${media.lessThan('medium')`
        padding: 0px 74px 0 74px;
        align-self: center !important;
        margin-bottom: 64px;
    `}

  ${media.between('medium', 'large')`
        padding: 6px 50px 42px 50px;
        max-width: 100%;
    `}

    ${media.between('large', 'huge')`
        padding: 6px 74px 42px 74px;
    `}

    > img:first-child {
    margin-bottom: 16px;
  }

  > h3 {
    ${tools.cardsTitle}

    text-align: center;
    margin-bottom: 4px;
  }

  > p {
    ${tools.cardsText}

    text-align: center;
    margin-bottom: 42px;
  }

  &:last-child {
    grid-area: top3;
    place-self: flex-end;
  }

  &:first-child {
    grid-area: top1;
    align-self: flex-start;
    justify-self: center;
  }

  &:nth-child(2) {
    grid-area: top2;
    align-self: flex-end;
  }
`;

export const RankIcon = styled.div`
  padding: 6px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 50%;
  background: var(--dark-hover);
  width: 40px;
  height: 40px;

  z-index: 20;
  position: absolute;
  left: 43%;
  right: 45.56%;
  top: 95.47%;
  display: flex;
  place-content: center;

  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: var(--yellow);
`;

export const Avatar = styled.img`
  border: 5px solid var(--nephritis);
  border-radius: 50%;
  width: ${(props) => (props.width ? props.width : '140px')};
  height: ${(props) => (props.width ? props.width : '140px')};

  margin-bottom: 12px;
`;

export const Score = styled.span`
  font-size: ${(props) => (props.top3 ? '24px' : '44px')};
  font-weight: 700;
  line-height: ${(props) => (props.top3 ? '28px' : '52px')};
  color: var(--nephritis);

  margin-bottom: 24px;

  > sub {
    font-size: ${(props) => (props.top3 ? '22px' : '38px')};
    line-height: 25.72px;
    color: var(--quinary);
  }
`;

export const Top3SocialMedias = styled.aside`
  position: absolute;
  right: 13px;
  bottom: 13px;

  > a {
    width: 30px;
    height: 30px;

    svg {
      width: 25px !important;
      height: 25px;

      color: var(--quinary);
    }

    ~ a {
      margin-left: 8px;
    }
  }
`;

export const List = styled.section`
  display: flex;
  flex-direction: column;
  place-content: center;

  padding: 0 80px 184px 80px;
  margin: 86px auto 35px auto;

  ${media.between('medium', 'large')`
        padding: 0px 60px 184px 60px;
    `}

  ${media.lessThan('medium')`
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 0 64px 0;
        position: relative;
    `}
`;

export const ListItem = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  background: var(--dark-hover);
  padding: 24px;
  border: 1px solid rgba(244, 207, 10, 0.18);
  border-radius: 20px;

  > span {
    margin-bottom: 0;

    ${media.lessThan('medium')`
            font-size: 24px;
            line-height: 28px;

            > sub {
                font-size: 22px;
                line-height: 25.72px;
            }      
        `}
  }

  & {
    margin-bottom: 28px;
  }

  &:last-child {
    margin-bottom: 0px;
  }

  ${media.lessThan('medium')`
        width: 85%;
        align-self: center;
        padding: 12px;
    `}

  ${media.lessThan('small')`
       flex-direction: column;
    `}
`;

export const ListItemInfo = styled.section`
  display: flex;
  align-items: center;

  > section:first-child {
    position: relative;
  }

  > section:last-child {
    margin-left: 41px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    ${media.lessThan('medium')`
            margin-left:12px;
        `}

    ${media.lessThan('small')`
            margin-left:0px;
        `}
  }

  > section:last-child h3 {
    ${tools.cardsTitle}

    margin-bottom: 12px;

    ${media.lessThan('medium')`
            font-size: 20px; 
        `}

    ${media.lessThan('small')`
            align-self: center;
        `}
  }

  > section:last-child p {
    ${tools.cardsText};
    background: #1f2124;
    padding: 5px 7px;

    ${media.lessThan('small')`
            margin-bottom: 12px;
            align-self: center;
        `}
  }

  ${media.lessThan('small')`
       flex-direction: column;
       align-items: center;
    `}
`;

export const ListRankIcon = styled(RankIcon)`
  left: 64%;
  top: -9%;

  width: 35px;
  height: 35px;
  padding: 5px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

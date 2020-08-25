import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.footer`
  width: 100%;
  max-width: 1440px;
  height: 100px;

  padding: 40px 100px;

  background-color: var(--tertiary);

  display: flex;
  justify-content: space-between;

  ${media.lessThan('small')`
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;
  `}
`;

export const Social = styled.div`
    display: flex;
  
    > a ~ a {
        margin-left: 20px;
      }
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: var(--white);

  span {
      color: var(--yellow);
  }

  ${media.lessThan('small')`
      margin-bottom: 25px;
  `}
`;

export const Anchor = styled.a`
    text-decoration: none;
    font-size: 22px;
    color: var(--quinary);

    transition: .25s;

    &:hover{
        color: var(--yellow);
    }
`;
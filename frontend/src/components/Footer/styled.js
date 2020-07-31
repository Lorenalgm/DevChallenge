import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  max-width: 1440px;
  height: 330px;

  padding: 40px 80px;

  background-color: var(--tertiary);

  display: flex;
  justify-content: space-between;
`;

export const Social = styled.div`
  display: flex;
  
  > a ~ a {
      margin-left: 20px;
    } 
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: var(--white);

  span {
      color: var(--yellow);
  }
`;

export const Anchor = styled.a`
    text-decoration: none;
    font-size: 28px;
    color: var(--quinary);

    transition: .25s;

    &:hover{
        color: var(--yellow);
    }
`;
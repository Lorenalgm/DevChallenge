import styled from 'styled-components';
import media from 'styled-media-query';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0px 80px 0 80px;
  margin-top: 40px;

  font-weight: normal;

  ${media.between('medium', 'large')`
        padding: 0px 60px 0 60px;
    `}

  ${media.lessThan('medium')`
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: center;
        padding: 0;
        position: relative;
    `}
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: var(--white);

  span {
    color: var(--yellow);
  }

  ${media.lessThan('medium')`
        margin-left: 20px;
    `}
`;

export const MenuMobile = styled.div`
  display: none;

  transition: 0.25s;

  ${media.lessThan('medium')`
        display: block;
        position: absolute;
        font-size: 25px;
        color: var(--white);
        top: 2;
        right: 0;
        margin-right: 20px;
        cursor: pointer;

        z-index: 9999;
    `}
`;

export const Menu = styled.div`
  ul {
    display: flex;
    align-items: center;

    list-style-type: none;

    font-size: 20px;
    color: var(--white);
    font-weight: 400;

    li ~ li {
      margin-left: 20px;
    }

    li:hover {
      opacity: 0.8;
    }

    ${media.lessThan('medium')`
            background-color: var(--primary);
            flex-direction: column;
            width: 100%;
            position: absolute;
            justify-content: space-around;
            height: 300px;
            align-items: center;
            margin-top: 0.5em;
            top: -100%;
            transform: ${({ open }) =>
              open ? 'translateY(-100%)' : 'translateY(0)'};
            transition: transform 0.5s ease;
            z-index: 1000;
            li ~ li {
              margin-left: 0;
            }
        `}
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: var(--white);

  cursor: pointer;

  &.is-active {
    color: var(--yellow);
  }
`;

export const ButtonLink = styled.a`
  background-color: var(--quaternary);

  width: 100px;
  padding: 5px 30px;
  border-radius: 25px;

  text-align: center;
  text-decoration: none;
  color: var(--white);

  &.is-active {
    background-color: var(--yellow);
    color: var(--tertiary);
  }
`;

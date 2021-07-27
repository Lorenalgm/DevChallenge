import * as S from './styles';

const Example = ({ title = 'DevChallenge' }) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.png" alt="Logo" />
    <S.Title>{title}</S.Title>
  </S.Wrapper>
);

export default Example;

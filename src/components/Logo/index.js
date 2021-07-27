import React from 'react';

import { StyledLink } from '../Header/styled';
import { Title } from './styled';

function Logo() {
  return (
    <Title>
      <StyledLink to="/" exact>
        Dev<span>Challenge</span>
      </StyledLink>
    </Title>
  );
}

export default Logo;

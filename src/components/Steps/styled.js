import styled from 'styled-components';
import media from 'styled-media-query';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StepsContainer = styled.section`
  margin-top: 100px;

  display: flex;
  align-items: center;
  justify-content: center;

  ${media.lessThan('medium')`
        padding: 0;
    `}
`;

export const Step = styled.div`
  width: 300px;
  height: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    color: var(--yellow);
    margin-top: 20px;

    ${media.lessThan('medium')`
            font-size: 1em;
        `}
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  color: var(--white);
  width: 60px !important;
  height: 60px;

  ${media.lessThan('medium')`
        height: 3em;
        width: 3em;
    `}
`;

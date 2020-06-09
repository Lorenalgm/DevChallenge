import styled from 'styled-components';
import media from 'styled-media-query';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StepsContainer = styled.section`
    display: flex;
    align-items: stretch;
    align-content: stretch;
    justify-content: center;
    padding: 80px 225px;

    ${media.lessThan('medium')`
        padding: 0;
    `};
`;

export const Step = styled.div`
    flex: 30% 0 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${media.lessThan('medium')`
        height: 10em;
        width: 20em;
        margin: 1em;
    `}

    h2 {
        color: #f4cf0a;
        margin-top: 20px;

        ${media.lessThan('medium')`
            font-size: 1em;
        `}
    }
`;

export const Icon = styled(FontAwesomeIcon)`
    color: #fff;
    width: 60px !important;
    height: 60px;

    ${media.lessThan('medium')`
        height: 3em;
        width: 3em;
    `}
`;

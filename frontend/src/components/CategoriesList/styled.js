import styled from 'styled-components';
import media from 'styled-media-query';

export const Techs = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: center;
    align-content: stretch;
    min-height: 350px;

    ${media.lessThan('medium')`
        flex-direction: column;
    `}
`;

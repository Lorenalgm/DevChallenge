import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
    padding: 0px 80px 0 80px;

    ${media.between('medium', 'large')`
        padding: 0px 60px 0 60px;
    `}
`;

export const Title = styled.h2`
    margin-bottom: 20px;
`;

export const Section = styled.section`
    margin-top: 3%;
    display: flex;
    flex-wrap: wrap;
    max-width: 100vw;
`;

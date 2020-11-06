import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
    padding: 0px 80px 0 80px;

    ${media.between('medium', 'large')`
        padding: 0px 60px 0 60px;
    `}

    ${media.lessThan('medium')`
        padding: 0px 20px 0 20px;
    `}
`;

export const StatusCardWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    margin-bottom: 50px;
`;

export const Title = styled.h2`
    margin-bottom: 20px;
`;

import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 2%;
    flex: 1;

    ${media.lessThan('medium')`
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin: 0%;
        margin-top: 5%;
    `}
`;

export const StatusCardWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    margin-bottom: 50px;
`;

export const Title = styled.h1`
    margin-bottom: 20px;
`;

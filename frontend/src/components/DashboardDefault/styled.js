import styled from 'styled-components';
import media from 'styled-media-query';

export const DashboardContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 350px;
    padding: 0px 80px 0 80px;
    color: var(--white);
`;

export const DbHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: flex-end;

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

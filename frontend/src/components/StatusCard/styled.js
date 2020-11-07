import styled from 'styled-components';

export const CardWrapper = styled.div`
    display: flex;
    width: 48%;
    max-width: 350px;
    height: 110px;
    background: var(--secondary);
    border-radius: 11px;
    border: 2px solid;
    padding: 25px;
    align-items: center;
    justify-content: space-between;
    color: var(--white);

    & > p {
        width: 150px;
        font-weight: 400;
        font-size: 20px;
        padding: 10px;
    }

    & > h1 {
        font-size: 50px;
    }
`;

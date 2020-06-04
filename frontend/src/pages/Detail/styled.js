import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 6%;
    flex: 1;
`;

export const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Infos = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-bottom: 1em;
    .challenge-level {
        background-color: #5c0d78;
        filter: brightness(90%);
        width: 9em;
        padding: 5px;
        border-radius: 20px;
        text-align: center;
        font-weight: bold;
        color: #fff;
    }
    .challenge-techs {
        filter: brightness(60%);
        width: 9em;
        border-radius: 20px;
        text-align: center;
        font-weight: bold;
        color: #fff;
    }
    .challenge-type {
        filter: brightness(90%);
        width: 10em;
        border-radius: 20px;
        text-align: center;
        font-weight: bold;
        color: #fff;
    }
`;

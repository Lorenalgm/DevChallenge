import styled from 'styled-components';

export const DevContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #2c2929;
    border-radius: 1em;
    margin: 1em;
    height: 5em;
    width: 20em;
    justify-content: center;

    img {
        height: 50px;
        width: 50px;
        border-radius: 2em;
    }
`;

export const DevInformation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
`;

export const DevName = styled.span`
    font-size: 18px;
    color: #ffff;
`;

export const DevPosition = styled.span`
    font-weight: bold;
    font-size: 12px;
    color: #ffff;
`;

export const DevSocialContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const AnchorIcon = styled.a`
    text-decoration: none;
    color: #ffff;
    padding: 2px;
`;

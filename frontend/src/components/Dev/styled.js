import styled from 'styled-components';

export const DevContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 13em;
    height: 10em;
    align-items: center;
    border-radius: 1em;
    margin: 1em;
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
    font-weight: 700;
    font-size: 12px;
    color: var(--color-yellow);
`;

export const DevSocialContainer = styled.div`
    display: flex;
`;

export const AnchorIcon = styled.a`
    text-decoration: none;
    color: #fff;
    padding: 2px;
`;

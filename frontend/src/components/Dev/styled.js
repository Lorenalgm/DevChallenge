import styled from 'styled-components';

export const DevContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 13em;
    align-items: center;
    border-radius: 1em;
    margin: 0.75em;
    justify-content: center;

    img {
        height: 80px;
        width: 80px;
        border-radius: 50%;
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
    font-weight: 400;
    font-size: 12px;
    color: var(--color-yellow);
    text-align: center;
`;

export const DevSocialContainer = styled.div`
    display: flex;
`;

export const AnchorIcon = styled.a`
    text-decoration: none;
    color: #fff;
    padding: 2px;
`;

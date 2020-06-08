import styled from 'styled-components';
import media from 'styled-media-query';

export const BannerContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 160px;
    margin-bottom: 160px;
    ${media.lessThan('medium')`
        margin-top: 14%;
        margin-bottom: 14%;
        margin-left: 3%;
        margin-right: 3%;
    `}
`;

export const BannerTitle = styled.h1`
    color: #ffff;
    font-size: 60px;
`;

export const BannerSubtitle = styled.h2`
    color: #f4cf0a;
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 20px;

    ${media.lessThan('medium')`
        font-size: 1em;
    `}
`;

export const BannerButton = styled.button`
    color: #ffff;
    background-color: #5c0d78;
    width: 250px;
    height: 60px;
    border: 1px solid #000000;
    font-weight: bold;
    font-size: 20px;
    border-radius: 50px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background-color: #490861;
    }
`;

export const Typewriter = styled.div`
    h1 {
        color: #fff;
        overflow: hidden;
        border-right: 0.15em solid #5c0d78;
        white-space: nowrap;
        letter-spacing: 0.02em;
        animation: typing 3.5s steps(30, end),
            blink-caret 0.5s step-end infinite;

        ${media.lessThan('medium')`
            font-size: 1.8em;
        `}
    }
    @keyframes typing {
        from {
            width: 0;
        }
        to {
            width: 100%;
        }
    }

    @keyframes blink-caret {
        from,
        to {
            border-color: transparent;
        }
        50% {
            border-color: #5c0d78;
        }
    }
`;

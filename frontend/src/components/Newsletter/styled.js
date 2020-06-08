import styled from 'styled-components';
import media from 'styled-media-query';

export const NewsletterContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    ${media.lessThan('medium')`
        flex-direction: column;
    `}

    div {
        display: flex;
        flex-direction: column;
        align-items: left;
        margin-left: 2em;

        ${media.lessThan('medium')`
            align-items: center;
            justify-content: center;
            text-align: center;
            margin-left: 0;
        `}
    }
`;

export const NewsletterTitle = styled.h1`
    color: #ffff;
    font-size: 2em;
    margin-bottom: 0.1em;
    color: #ffff;

    ${media.lessThan('medium')`
        font-size: 1.3em;
        margin-bottom: 0.1em;
    `}
`;

export const NewsletterParagraph = styled.p`
    color: var(--color-yellow);
    font-size: 1em;

    ${media.lessThan('medium')`
        margin: 1em;
    `}
`;

export const NewsletterForm = styled.form`
    display: flex;
    flex-direction: column;

    ${media.lessThan('medium')`
        display: flex;
        align-content: center;
        justify-content: center;
        text-align: center;
        margin-bottom: 3em;
    `}

    input {
        height: 3.5em;
        width: 20em;
        margin-top: 1em;
        margin-bottom: 1em;
        border-radius: 0.5em;
        border: 1px solid #ffff;
        padding: 20px;
        font-size: 18px;

        ${media.lessThan('medium')`
            height: 3em;
            width: 18em;
        `}
    }

    button {
        color: #ffff;
        background-color: #5c0d78;
        width: 350px;
        height: 60px;
        border: 1px solid #000000;
        font-weight: bold;
        font-size: 20px;
        border-radius: 50px;
        cursor: pointer;
        transition: 0.3s;

        ${media.lessThan('medium')`
            width: 16em;
            height: 3em;
        `}

        &:hover {
            background-color: #490861;
        }
    }
`;

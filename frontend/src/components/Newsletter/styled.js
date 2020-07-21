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
    color: var(--white);
    font-size: 2em;
    margin-bottom: 0.1em;

    ${media.lessThan('medium')`
        font-size: 1.3em;
        margin-bottom: 0.1em;
    `}
`;

export const NewsletterParagraph = styled.p`
    color: var(--yellow);
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
        padding: 20px;
        font-size: 18px;

        ${media.lessThan('medium')`
            height: 3em;
            width: 18em;
        `}
    }

    button {
        color: var(--white);
        background-color: var(--purple);
        width: 350px;
        height: 60px;
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
            background-color: var(--dark-purple);
        }
    }
`;

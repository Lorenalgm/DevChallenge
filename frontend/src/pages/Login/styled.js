import styled from 'styled-components';
import media from 'styled-media-query';

export const Section = styled.section`
    margin-top: 8%;
    margin-bottom: 10%;
    display: flex;
    flex-wrap: wrap;
    max-width: 100vw;
    align-items: center;
    justify-content: center;

    ${media.lessThan('medium')`
        margin-top: 15%;
        margin-bottom: 15%;
    `}
`;

export const Form = styled.form`
    background-color: var(--secondary);
    width: 40%;
    height: 40%;
    padding: 36px 48px 31px;
    border-radius: 10px;

    ${media.between("medium", "large")`
        width: 50%;
        height: 50%;
    `}

    ${media.between("small", "medium")`
        width: 70%;
        height: 70%;
    `}

    ${media.lessThan('small')`
        width: 80%;
        padding: 20px 28px 18px;
    `}
`;

export const Title = styled.h1`
    color: var(--white);
    font-size: 36px;

    ${media.lessThan('medium')`
        font-size: 24px;
    `}
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100px;
    margin-top: 20px;
    margin-bottom: 25px;
`;

export const Field = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding-left: 15px;
    border-radius: 30px;
    background: rgba(255, 255, 255, 0.2);
`;

export const Input = styled.input`
    margin-left: 10px;
    width: 100%;
    background-color: transparent;
    height: 15px;
    padding: 20px 20px 20px 0;
    color: white;
    font-size: 15px;
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    margin-bottom: 35px;

    ${media.lessThan('small')`
        flex-direction: column-reverse;
    `}
`;

export const ButtonBox = styled.div`
    display: flex;
    align-items: center;

    ${media.lessThan('small')`
        justify-content: space-between;
    `}
`;

export const SocialButton = styled.button`
    cursor: pointer;
    height: 1.8em;
    width: 3em;
    border-radius: 30px;
    &:first-child {
        margin-right: 16px;
    }

    ${media.lessThan('small')`
        width: 45%;
        margin: 0;
    `}
`;

export const Button = styled.button`
    cursor: pointer;
    height: 2.5em;
    width: 8em;
    border-radius: 50px;

    ${media.lessThan('small')`
        width: 45%;
        margin: 0 0 10px 0;
    `}

    &:first-child {
        margin-right: 21px;
    }

    &.cadastro {
        background-color: transparent;
        border: 2px solid var(--quinary);
        color: var(--white);
    }

    &.login {
        background-color: var(--purple);
        color: var(--white);
    }
`;

export const Problem = styled.span`
    display: block;
    margin-top: 20px;
    color: white;
    font-size: 15px;
    text-align: center;
`;
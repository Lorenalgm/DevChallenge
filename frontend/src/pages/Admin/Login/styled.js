import styled from 'styled-components';
import media from 'styled-media-query';
import { NavLink } from 'react-router-dom';

export const UploadLabel = styled.label`
    width: 320px;
    aspect-ratio: 16/9;
    border: 1px dashed var(--white);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;

    font-size: 16px;
    font-weigth: bold;
    color: var(--white);
    cursor: pointer;

    transition: 0.2s;
    &:hover {
        border: 1px dashed var(--yellow);
        color: var(--yellow);
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
`;

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
`;
export const InputLabel = styled.label`
    color: white;
    font-weight: normal;
`;

export const Textarea = styled.textarea`
    min-height: 96px;
    width: 100%;
    border-radius: 6px;
    padding: 4px 16px;
    font-size: 14px;
    border: none;

    &:focus {
        border: 2px solid var(--yellow);
    }
`;

export const Select = styled.select`
    height: 48px;
    width: 100%;
    border-radius: 6px;
    padding: 4px 16px;
    font-size: 14px;
    border: none;

    &:focus {
        border: 2px solid var(--yellow);
    }
`;

export const InputText = styled.input`
    height: 48px;
    width: 100%;
    border-radius: 6px;
    padding: 4px 16px;
    font-size: 14px;
    border: none;

    &:focus {
        border: 2px solid var(--yellow);
    }
`;

export const Modal = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    background-color: #000000cc;
    overflow: hidden;
`;

export const ModalCard = styled.div`
    width: 80%;
    max-height: 70vh;
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    background-color: var(--tertiary);
    padding: 16px 24px;
    border-radius: 8px;
`;

export const Row = styled.div`
    display: flex;
`;

export const Col = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Subtitle = styled.h2`
    color: white;
`;

export const Paragraph = styled.p`
    color: white;
    font-weight: normal;
`;

export const IconButton = styled.button`
    width: 32px;
    height: 32px;
    background-color: var(--yellow);
    color: var(--white);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        filter: contrast(0.7);
    }
`;

export const Button = styled.button`
    padding: 8px 16px;
    background-color: var(--yellow);
    color: var(--white);
    display: flex;
    flex-direction: row;
    gap: 8px;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        filter: contrast(0.7);
    }
`;

export const ImageRow = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 4px;
    object-fit: cover;
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;

    padding: 16px 80px;
    margin-top: 40px;

    font-weight: normal;

    ${media.between('medium', 'large')`
        padding: 16px 60px;
    `}

    ${media.lessThan('medium')`
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        padding: 8px;
    `}
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #212121;

    padding: 0px 80px 16px 80px;
    margin-top: 40px;

    font-weight: normal;

    ${media.between('medium', 'large')`
        padding: 0px 60px 16px 60px;
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

export const Title = styled.div`
    font-size: 30px;
    font-weight: bold;
    color: var(--white);

    span {
        color: var(--yellow);
    }

    ${media.lessThan('medium')`
        margin-left: 20px;
    `}
`;

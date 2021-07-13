import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
    padding: 40px 100px 0 100px;

    ${media.between('medium', 'large')`
        padding: 40px 60px 0 60px;
    `}
`;

export const HeaderImg = styled.div`
    width: 100%;
    height: 200px;
    background: ${(props) => `url(${props.img})  no-repeat`};
    background-size: cover;
    margin-top: 20px;
`;

export const Content = styled.div`
    padding: 30px;
`;
export const ToDoDiv = styled.div`
    display: flex;
    padding-left: 30px;
    padding-top: 10px;
    width: 100%;
    display: block;

    input[type='checkbox'] {
        display: none;
    }

    input[type='text'] {
        background: var(--primary);
        color: var(--quinary);
        font-size: 18px;
        width: 80%;
    }

    label {
        cursor: pointer;
        font-size: 0;
    }

    input + label::before {
        border: 1px solid var(--quinary);
        content: '\\00a0';
        display: inline-block;
        font: 16px/1em sans-serif;
        height: 16px;
        margin: 0 10px 0 0;
        padding: 0;
        vertical-align: top;
        width: 16px;
    }

    input[type='checkbox']:checked + label:before {
        color: var(--quinary);
        content: '\\2713';
        text-align: center;
    }

    input[type='checkbox']:checked + label:after {
        font-weight: bold;
    }
`;

export const AddToDo = styled.button`
    background: var(--primary);
    color: var(--quinary);
    opacity: 0;
    transition: 0.3s;
    padding-left: 30px;

    &:hover {
        opacity: 1;
    }
`;

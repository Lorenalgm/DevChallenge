import styled from 'styled-components';
import media from 'styled-media-query';
import chevronDown from '../../assets/chevron-down.svg';

export const Section = styled.section`
    margin-top: 3%;
    display: flex;
    flex-wrap: wrap;
    max-width: 100vw;
    align-items: center;
    justify-content: center;
`;

export const Head = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--quaternary);
    margin-top: 60px;
    padding: 0 80px;
    font-size: 18px;

    h1 {
        color: whitesmoke;
        ${media.lessThan('medium')`
            font-size: 30px;
         `}
    }

    ${media.lessThan('medium')`
        padding: 0 20px;
    `}
`;

export const Filters = styled.form`
    color: white;
    display: flex;
`;

export const InputGroup = styled.div`
    margin: 0 0 0 14px;

    label {
        padding-left: 4px;
        font-size: 14px;
        font-weight: bold;
        display: block;
    }
`;

export const Select = styled.div`
    padding-right: 20px;
    height: 34px;
    overflow: hidden;
    background: url(${chevronDown}) no-repeat right var(--primary);

    select {
        width: 120%;
        padding-right: 20px;
        background: transparent;
        padding: 5px;
        font-size: 16px;
        line-height: 1;
        border: 0;
        border-radius: 0;
        height: 34px;
        -webkit-appearance: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        color: white;
    }

    option {
        background-color: var(--primary);
        border: 0;
    }
`;

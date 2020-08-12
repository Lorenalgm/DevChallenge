import styled from 'styled-components';

export const Aside = styled.aside`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;

    width: 350px;
    background: var(--secondary);
    color: var(--white);
`;

export const UserInfo = styled.div`
    margin-top: 50px;

    & > p {
        font-size: 20px;
        font-weight: bold;
        font-family: Roboto;
    }

    & > span {
        font-family: Roboto;
        font-size: 12px;
    }
`;

export const Img = styled.img`
    height: 120px;
    width: 120px;
    border-radius: 50%;
    margin-bottom: 10px;
    border: 4px solid var(--yellow);
`;

export const Ul = styled.ul`
    width: 100%;
    margin-top: 30px;
    list-style: none;
    text-align: center;
`;

export const Li = styled.li`
    width: 100%;
    height: 50px;
    display: flex;
    padding: 0 50px;
    text-align: center;
    align-items: center;
    font-size: 20px;
`;

import styled from "styled-components";

export const Section = styled.section`
    margin-top: 3%;
    display: flex;
    flex-wrap: wrap;
    max-width: 100vw;
    align-items: center;
    justify-content: center;
`;

export const ChallengeSkeleton = styled.div`
    border-radius: 16px;
    cursor: pointer;

    height: 430px;
    width: 380px;
    margin: 0 .5em 1em .5em;

    overflow: hidden;
`;

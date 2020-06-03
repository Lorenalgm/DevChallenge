import styled from "styled-components";

export const Section = styled.section`
    max-width: 1000px;
    margin: 50px auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 35px;
`;

export const ChallengeSkeleton = styled.div`
    border-radius: 10px;
    cursor: pointer;
    height: 300px;
    width: 300px;
`;

import styled from "styled-components";

export const TimepickerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 20px;
    width: calc(50% - 20px);
`;

export const Title = styled.h3`
    font-size: 20px;
    font-weight: 600;
    margin: 2px;
    color: ${({ theme }) => theme.palette.text.primary}
`;

export const TimepickerInputsContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
    width: 100%;
`;
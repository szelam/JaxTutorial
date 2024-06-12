import styled from "styled-components";

export const TitleLabel = styled.h2`
    color: ${({ theme }) => theme.palette.primary.main};
    font-weight: bold;
    font-size: 16px;
`

export const OptionalLabel = styled.span`
    color: ${({ theme }) => theme.palette.secondary.checkbox};
    font-weight: bold;
    font-size: 16px;
    margin-left: 10px;
`
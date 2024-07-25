import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    gap: 20px;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
`

export const ActionButtonContainer = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`

export const CustomButton = styled.button`
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: white;
    border: 0;
    padding: 8px 24px;
    border-radius: 0.5rem;
    font-size: 16px;
    font-weight: 600;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
    cursor: pointer;
    `

export const CustomPillButton = styled.button`
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: white;
    border: 0;
    padding: 8px 24px;
    border-radius: 100px;
    font-size: 16px;
    font-weight: 600;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
    cursor: pointer;
    `

export const CustomSecondaryButton = styled.button`
    background-color: #DEDEDE;
    color: white;
    border: 0;
    padding: 8px 24px;
    border-radius: 0.5rem;
    font-size: 16px;
    font-weight: 600;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
`
import styled from 'styled-components';

export const Container = styled.div`
    margin: 40px;
    padding: 20px;
    border-radius: 20px;
    box-shadow: rgb(222, 222, 222) 0px 0px 3px 0px;
    overflow: hidden
`;

export const ActionRow = styled.div`
    display: flex;
    gap: 20px;
    justify-content: right;
    width: 100%;
    margin-bottom: 20px;
`

export const CustomButton = styled.button`
    background-color: rgb(33, 191, 188);
    color: white;
    border: 0;
    padding: 8px 24px;
    border-radius: 0.5rem;
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
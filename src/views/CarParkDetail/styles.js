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

export const SwitchContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 20px;
`

export const LeftPanel = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`

export const RightPanel = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 0px 20px 0px 40px;
`

// export const Bottom

export const RowContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1.25rem;
    justify-content: left;
`

export const RowChildrenContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    width: 100%;
    align-items: center;
`

export const RowBackgroundWrapper = styled.div`
    background-color: #F1FFFF;
    padding: 10px;
`

export const RowBackgroundWrapperSpace = styled.div`
    padding: 10px;
`

export const RowLabel = styled.label`
    min-width: 200px;
    /* white-space: nowrap; */
`

export const RowImg = styled.img`
    width: 100%;
    height: auto;
    border-radius: 20px;
`

export const CustomSelect = styled.select`
border-radius: 15px;
border: 1px solid #DBDBDB;
color: black;
width: 100%;
height: 56px;
appearance: none;
background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z' fill='%2321BFBC' stroke='%2321BFBC' stroke-width='0.5'/%3E%3C/svg%3E");
background-repeat: no-repeat;
background-position: right 1rem center;
background-size: 1.5em;
padding: 0.5rem 2rem 0.5rem 1rem;

&:hover {
  border: 1px solid #21BFBC;
}
`;

export const TooltipCircle = styled.span`
    background-color: #21BFBC;
    color: white;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    font-weight: 600;
`

export const Title = styled.h1`
    font-size: 30px;
    color: #21BFBC;
    font-weight: 400;
    margin: 30px 0px;
`
/* 
export const CustomCheckboxGroup = styled.label`
    display: flex;
    position: relative;
    align-items: center;
    cursor: pointer;
    user-select: none;
    padding-left: 30px;
    transition: all 300ms ease-in-out 0s;
    flex-grow: 1;
    flex-basis: 25%;
` */
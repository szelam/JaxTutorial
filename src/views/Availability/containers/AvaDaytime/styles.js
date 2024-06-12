import styled from "styled-components";

export const RowGroup = styled.div`
  margin-top: 60px;
`;

export const DayChooserRow = styled.div`
  display: flex;
`;

export const DayChooser = styled.button`
      margin: 10px 10px 5px;
    background-color: rgb(242, 255, 255);
    padding: 10px;
    border-radius: 10px;
    color: rgb(186, 234, 233);
    border: 3px solid rgb(186, 234, 233);
    transition: all 300ms ease-in-out 0s;
`

export const ResetButton = styled.button`
  color: rgb(33, 191, 188);
    align-self: flex-end;
    margin-left: 20px;
    margin-bottom: 7px;
    text-decoration: underline;
    background-color: initial;
    border: 0;
    cursor: pointer;
    outline: 0;
    padding: 0;
`

export const CustomSelect = styled.select`
border-radius: 15px;
border: 1px solid #DBDBDB;
color: black;
width: 40%;
height: 56px;
appearance: none;
background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z' fill='%2321BFBC' stroke='%2321BFBC' stroke-width='0.5'/%3E%3C/svg%3E");
background-repeat: no-repeat;
background-position: right 1rem center;
background-size: 1.5em;
font-size: 16px;
padding: 0.5rem 2rem 0.5rem 1rem;

&:hover {
  border: 1px solid #21BFBC;
}
`;

export const ButtonRow = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: end;
  gap: 20px;
  `;


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
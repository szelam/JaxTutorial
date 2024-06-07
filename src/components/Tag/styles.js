import styled from "styled-components";

export const TagPill = styled.div`
    position: relative;
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: white;
    padding: 5px 20px;
    border-radius: 100px;
    margin-right: 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
`;

export const TagImg = styled.img`
    width: 30px;
    height: auto;
    margin-left: 10px;
`;

export const TagDeleteButton = styled.div`
    position: absolute;
    right: -6px;
    top: -13px;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
    width: 26px;
    height: 26px;
    cursor: pointer;
`;
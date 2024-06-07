import styled from 'styled-components';
import Checkbox from '@mui/material/Checkbox';
import { styled as MUIStyled } from '@mui/system';

export const StyledCheckbox = MUIStyled(Checkbox)(({ theme }) => ({
    border: `2px solid ${theme.palette.secondary.checkbox}`,
    borderRadius: '5px',
    width: '22px',
    height: '22px',
    transition: 'all 300ms ease-in-out 0s',
    marginRight: '10px',

    '&.Mui-checked': {
        color: theme.palette.primary.main,
        border: `2px solid ${theme.palette.primary.main}`,
    },

    '& .MuiSvgIcon-root': {
        transition: 'all 300ms ease-in-out 0s',
        fill: 'transparent',
    },

    '&.Mui-checked .MuiSvgIcon-root': {
        fill: theme.palette.primary.main,
    }
}));

export const CheckboxWrapper = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    cursor: pointer;
    user-select: none;
    transition: all 300ms ease-in-out 0s;
    flex-grow: 1;
    flex-basis: 25%;
`;
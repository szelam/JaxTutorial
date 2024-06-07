import styled from 'styled-components';
import {
    FormControl,
    InputLabel,
    OutlinedInput,
    FormHelperText,
} from "@mui/material";
import { styled as MUIStyled } from "@mui/system";

export const StyledFormControl = styled(FormControl)`
    width: ${({ width }) => width};
`;

export const StyledInputLabel = MUIStyled(InputLabel)(({ theme, error }) => ({
    "&.MuiInputLabel-root": {
        color: error ? theme.palette.error.main : theme.palette.secondary.main,
    },
    "&.Mui-focused": {
        color: theme.palette.primary.main,
    },
}));

export const StyledOutlinedInput = styled(OutlinedInput)`
    &.MuiInputBase-multiline {
        padding: 0;
    }
    #outlined-addressdetails {
        transition: all 300ms ease 0s;
        padding: 16.5px 14px;
    }
    &.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
        border-radius: 15px;
        /* border-color: #DBDBDB; */
        border-color: ${({ error, theme }) => (error ? theme.palette.error.main : theme.palette.secondary.main)};
    }
    &.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
        border-color: ${({ error, theme }) => (error ? theme.palette.error.main : theme.palette.primary.main)};
    }
    &.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
        border: 1px solid ${({ theme }) => theme.palette.primary.main};
    }
`;

export const StyledFormHelperText = styled(FormHelperText)`
    position: absolute;
    bottom: 0;
    transform: translateY(100%);
    &.Mui-error {
        color: ${({ theme }) => theme.palette.error.main};
    }
`;
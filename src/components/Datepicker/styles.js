import { DatePicker } from "@mui/x-date-pickers";
import { styled as MUIStyled } from "@mui/system";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    margin-right: 20px;
`;

export const StyledDatePicker = MUIStyled(DatePicker)(({ theme }) => ({
    flex: '1 1 75%',
    "&:hover label": {
        color: theme.palette.primary.main,
    },
    '& .MuiOutlinedInput-root': {
        borderRadius: '15px',
        '& .MuiOutlinedInput-notchedOutline': {
            border: `1px solid ${theme.palette.secondary.main}`,
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.main,
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.main,
        },
    },
    '& .MuiInputLabel-root': {
        color: theme.palette.secondary.main,
        '&.Mui-focused': {
            color: theme.palette.primary.main,
        },
    },
    '& .MuiSvgIcon-root': {
        color: theme.palette.primary.main,
    },
}));
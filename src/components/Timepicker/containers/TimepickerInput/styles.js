import { TimePicker } from "@mui/x-date-pickers";
import { styled as MUIStyled } from "@mui/system";

export const StyledTimePicker = MUIStyled(TimePicker)(({ theme }) => ({
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
        '&:hover': {
            color: theme.palette.primary.main,
        },
        '&.Mui-focused': {
            color: theme.palette.primary.main,
        },
    },
    '& .MuiSvgIcon-root': {
        color: theme.palette.primary.main,
    },
}));
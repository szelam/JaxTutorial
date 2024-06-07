import React from 'react';
import { IconButton } from '@mui/material';
import { styled as MUIStyled } from '@mui/system';

const StyledIconButton = MUIStyled(IconButton)({
    backgroundColor: '#21BFBC',
    color: '#fff',
    height: '30px',
    width: '30px',
    borderRadius: '5px',
    padding: '10px',
    boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 8px',
    '&:hover': {
        backgroundColor: '#21BFBC',
    }
});

export default function CustomIconButton({ onClick, children }) {
    return (
        <StyledIconButton onClick={onClick} disableRipple>
            {children}
        </StyledIconButton>
    )
}
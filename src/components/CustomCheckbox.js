import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import { Controller } from 'react-hook-form';
import { styled as MUIStyled } from '@mui/system';
import styled from 'styled-components';

const StyledCheckbox = MUIStyled(Checkbox)({
    border: '2px solid rgb(219, 219, 219)',
    borderRadius: '5px',
    width: '20px',
    height: '20px',
    transition: 'all 300ms ease-in-out 0s',
    marginRight: '10px',
    padding: '0px',

    '&.Mui-checked': {
        color: '#21BFBC',
        border: '2px solid rgb(33, 191, 188)',
    },

    '& .MuiSvgIcon-root': {
        transition: 'all 300ms ease-in-out 0s',
        fill: 'transparent',
    },

    '&.Mui-checked .MuiSvgIcon-root': {
        fill: '#21BFBC',
    }
});

const CheckboxWrapper = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    cursor: pointer;
    user-select: none;
    transition: all 300ms ease-in-out 0s;
    flex-grow: 1;
    flex-basis: 25%;
`;

export default function CustomCheckbox({ control, name, label, error }) {
    return (
        <CheckboxWrapper>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <FormControlLabel
                        control={
                            <StyledCheckbox
                                {...field}
                                color="primary"
                            />
                        }
                        label={label}
                    />
                )}
            />
        </CheckboxWrapper>
    );
}
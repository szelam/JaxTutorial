import React from 'react';
import { Radio, FormControlLabel, RadioGroup, FormControl } from '@mui/material';
import { Controller } from 'react-hook-form';
import { styled as MUIStyled } from '@mui/system';
import styled from 'styled-components';

const StyledFormControlLabel = MUIStyled(FormControlLabel)({
    '& .MuiFormControlLabel-label': {
        marginRight: '3rem'
    },
});

const StyledRadio = MUIStyled(Radio)({
    border: '1px solid rgb(219, 219, 219)',
    borderRadius: '50%',
    width: '18px',
    height: '18px',
    transition: 'all 300ms ease-in-out 0s',
    marginRight: '10px',

    '&.Mui-checked': {
        // color: 'transparent',
        border: '1px solid rgb(33, 191, 188)',
        // backgroundColor: 'transparent', // Add this line to remove the inside circle
    },

    '& .MuiSvgIcon-root': {
        fill: 'transparent',
    },

    '&.Mui-checked .MuiSvgIcon-root': {
        fill: '#21BFBC',
    }
});

const RadioWrapper = styled.div`
display: flex;
position: relative;
align - items: center;
cursor: pointer;
user - select: none;
padding - left: 30px;
transition: all 300ms ease -in -out 0s;
flex - grow: 1;
flex - basis: 25 %;
`;

export default function CustomRadioGroup({ control, name, labels, error }) {
    return (
        <Controller
            rules={{ required: true }}
            control={control}
            name={name}
            error={error}
            render={({ field }) => (
                <FormControl component="fieldset">
                    <RadioGroup row>

                        {labels.map((label) => (
                            <StyledFormControlLabel
                                key={label}
                                value={label.toLowerCase()}
                                control={<StyledRadio />}
                                label={label}
                            />
                        ))}
                    </RadioGroup>
                </FormControl>
            )
            }
        />
    );
}

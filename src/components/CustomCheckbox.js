import React from 'react';
import { Checkbox, FormControlLabel, FormHelperText, FormControl } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { styled as MUIStyled } from '@mui/system';
import styled from 'styled-components';

const StyledCheckbox = MUIStyled(Checkbox)({
    border: '2px solid rgb(219, 219, 219)',
    borderRadius: '5px',
    width: '22px',
    height: '22px',
    transition: 'all 300ms ease-in-out 0s',
    marginRight: '10px',

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

const StyledFormHelperText = MUIStyled(FormHelperText)(() => ({
    position: "absolute",
    bottom: "0",
    transform: "translateY(100%)",
    color: "#FF0000",
}));

const CustomFormControl = MUIStyled(FormControl)(() => ({
    display: 'flex',
    flexWrap: 'wrap',
    cursor: 'pointer',
    gap: '10px',
    paddingLeft: '20px',
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: '100%',
    position: 'relative',
}));

export default function CustomCheckbox({ name, labels }) {

    const { control, formState } = useFormContext();
    const error = formState.errors[name];

    return (
        <CustomFormControl error={!!error}>
            <Controller
                name={name}
                control={control}
                defaultValue={[]}
                error={error}
                render={({ field: { onChange, value } }) => (
                    <>
                        {labels.map((label, index) => (
                            <CheckboxWrapper key={index}>
                                <FormControlLabel
                                    control={
                                        <StyledCheckbox
                                            checked={value.includes(label)}
                                            onChange={(e) => {
                                                if (e.target.checked) {
                                                    onChange([...value, label]);
                                                } else {
                                                    onChange(value.filter((v) => v !== label));
                                                }
                                            }}
                                        />
                                    }
                                    label={label}
                                />
                            </CheckboxWrapper>
                        ))}
                    </>
                )}
            />
            {!!error && <StyledFormHelperText>{error.message}</StyledFormHelperText>}
        </CustomFormControl>
    );
}
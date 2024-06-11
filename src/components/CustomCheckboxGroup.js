import React, { useEffect } from 'react';
import { Checkbox, FormControlLabel, FormHelperText, FormControl } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { styled as MUIStyled } from '@mui/system';
import CustomCheckbox from './CustomCheckbox';

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
    // paddingLeft: '20px',
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: '100%',
    position: 'relative',
}));

export default function CustomCheckboxGroup({ name, labels = [], values = [] }) {

    const { control, formState, getValues } = useFormContext();
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
                            <CustomCheckbox
                                key={index}
                                label={label}
                                checked={value.includes(values[index])}
                                onChange={(newValue) => {
                                    if (newValue) {
                                        onChange([...value, values[index]]);
                                    } else {
                                        onChange(value.filter((v) => v !== values[index]));
                                    }
                                }}
                            />
                        ))}
                    </>
                )}
            />
            {!!error && <StyledFormHelperText>{error.message}</StyledFormHelperText>}
        </CustomFormControl>
    );
}
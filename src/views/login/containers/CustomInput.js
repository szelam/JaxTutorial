import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import {
    StyledFormControl,
    StyledInputLabel,
    StyledOutlinedInput,
    StyledFormHelperText,
} from "../styles";

export default function CustomInput({ name, label }) {
    const { control, error } = useFormContext({ name, label });

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <StyledFormControl variant="outlined" error={!!error}>
                    <StyledInputLabel
                        htmlFor={`outlined-adornment-${name}`}
                        error={!!error}
                    >
                        {label}
                    </StyledInputLabel>
                    <StyledOutlinedInput
                        {...field}
                        id={`outlined-adornment-${name}`}
                        error={!!error}
                        label={label}
                    />
                    {!!error && (
                        <StyledFormHelperText>{error.message}</StyledFormHelperText>
                    )}
                </StyledFormControl>
            )}
        />
    );
}

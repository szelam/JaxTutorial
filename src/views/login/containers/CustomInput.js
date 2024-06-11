import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import {
    StyledFormControl,
    StyledInputLabel,
    StyledOutlinedInput,
    StyledFormHelperText,
} from "../styles";

export default function CustomInput({ name, label }) {
    const { control } = useFormContext({ name, label });

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => (
                <StyledFormControl variant="outlined" error={!!fieldState?.error}>
                    <StyledInputLabel
                        htmlFor={`outlined-adornment-${name}`}
                        error={!!fieldState?.error}
                    >
                        {label}
                    </StyledInputLabel>
                    <StyledOutlinedInput
                        {...field}
                        id={`outlined-adornment-${name}`}
                        error={!!fieldState?.error}
                        label={label}
                    />
                    {!!fieldState?.error && (
                        <StyledFormHelperText>{fieldState?.error.message}</StyledFormHelperText>
                    )}
                </StyledFormControl>
            )}
        />
    );
}

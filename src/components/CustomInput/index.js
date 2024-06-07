import React, { forwardRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
import {
    StyledFormControl,
    StyledInputLabel,
    StyledOutlinedInput,
    StyledFormHelperText,
} from "./styles";

const CustomInput = forwardRef(({
    name,
    label,
    required = false,
    multiline = false,
    number = false,
    width = "100%",
}, ref) => {
    const { control, formState } = useFormContext();
    const error = formState.errors[name];

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => (
                <StyledFormControl variant="outlined" error={!!fieldState.error} width={width}>
                    <StyledInputLabel htmlFor={`outlined-${name}`} error={!!fieldState.error}>
                        {label}
                    </StyledInputLabel>
                    <StyledOutlinedInput
                        {...field}
                        id={`outlined-${name}`}
                        type="text"
                        label={label}
                        error={!!fieldState.error}
                        multiline={multiline}
                        minRows={4}
                        inputRef={ref}
                        onChange={(e) => {
                            if (number) {
                                let val = e.target.value;
                                if (val.startsWith("0") || val === "" || /[a-zA-Z]/.test(val)) {
                                    field.onChange("");
                                    return;
                                }
                                if (val.length > 8) {
                                    val = val.slice(0, 8);
                                }
                                let numval = Number(val);
                                field.onChange(isNaN(numval) ? field.value : numval);
                            } else {
                                field.onChange(e.target.value);
                            }
                        }}
                    />
                    {!!fieldState.error && (
                        <StyledFormHelperText>{fieldState.error.message}</StyledFormHelperText>
                    )}
                </StyledFormControl>
            )}
        />
    );
});

export default CustomInput;
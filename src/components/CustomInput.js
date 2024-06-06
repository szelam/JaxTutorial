import React, { useEffect } from "react";
import { Controller } from "react-hook-form";
import {
    FormControl,
    InputLabel,
    OutlinedInput,
    FormHelperText,
} from "@mui/material";
import { styled as MUIStyled } from "@mui/system";

export const StyledFormControl = MUIStyled(FormControl)(({ width }) => ({
    width: width,
}));

export const StyledInputLabel = MUIStyled(InputLabel)(({ theme, error }) => ({
    "&.MuiInputLabel-root": {
        color: error ? "#FF0000" : "#B7B7B7",
    },
    "&.Mui-focused": {
        color: "#21BFBC",
    },
}));

export const StyledOutlinedInput = MUIStyled(OutlinedInput)(
    ({ theme, error }) => ({

        "#outlined-addressdetails": {
            transition: 'all 300ms ease 0s',
        },

        "&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderRadius: "15px",
            borderColor: error ? "#FF0000" : "#B7B7B7",
        },
        "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: error ? "#FF0000" : "#21BFBC",
        },
        "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #21BFBC",
        },
    })
);

export const StyledFormHelperText = MUIStyled(FormHelperText)(() => ({
    position: "absolute",
    bottom: "0",
    transform: "translateY(100%)",

    "&.Mui-error": {
        color: "#FF0000",
    },
}));

export default function CustomInput({
    control,
    name,
    label,
    error = false,
    required = false,
    multiline = false,
    number = false,
    width = "100%",
}) {
    useEffect(() => {
        console.log(!!error);
    }, [error]);

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <StyledFormControl variant="outlined" error={!!error} width={width}>
                    <StyledInputLabel htmlFor={`outlined-${name}`} error={!!error}>
                        {label}
                    </StyledInputLabel>
                    <StyledOutlinedInput
                        {...field}
                        id={`outlined-${name}`}
                        type="text"
                        label={label}
                        error={!!error}
                        multiline={multiline}
                        minRows={4}
                        onChange={(e) => {
                            if (number) {
                                let val = e.target.value;
                                if (val.startsWith("0") || val === "" || /[a-zA-Z]/.test(val)) {
                                    console.log("hi");
                                    field.onChange("");
                                    return;
                                }
                                if (val.length > 8) {
                                    val = val.slice(0, 8);
                                }
                                let numval = Number(val);
                                field.onChange(isNaN(numval) ? field.value : numval);
                            }
                        }}
                    />
                    {!!error && (
                        <StyledFormHelperText>{error.message}</StyledFormHelperText>
                    )}
                </StyledFormControl>
            )}
        />
    );
}

import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import {
    StyledFormControl,
    StyledInputLabel,
    StyledOutlinedInput,
    StyledIconButton,
    StyledFormHelperText,
} from "../styles";
import { InputAdornment } from "@mui/material";

export default function CustomPasswordInput() {
    const { control, error } = useFormContext();
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Controller
            name="password"
            control={control}
            render={({ field }) => (
                <StyledFormControl variant="outlined" error={!!error}>
                    <StyledInputLabel
                        htmlFor="outlined-adornment-password"
                        error={!!error}
                    >
                        Password
                    </StyledInputLabel>
                    <StyledOutlinedInput
                        {...field}
                        id="outlined-adornment-password"
                        type={showPassword ? "text" : "password"}
                        error={!!error}
                        endAdornment={
                            <InputAdornment position="end">
                                <StyledIconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    size="small"
                                >
                                    {showPassword ? (
                                        <img src="/img/eye-solid.svg" width="30px" alt="show" />
                                    ) : (
                                        <img
                                            src="/img/eye-slash-solid.svg"
                                            width="30px"
                                            alt="hide"
                                        />
                                    )}
                                </StyledIconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                    {!!error && (
                        <StyledFormHelperText>{error.message}</StyledFormHelperText>
                    )}
                </StyledFormControl>
            )}
        />
    );
}

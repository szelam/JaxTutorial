import React from "react";
import { FormControlLabel } from "@mui/material";
import { CheckboxWrapper, StyledCheckbox } from "./styles";

export default function CustomCheckbox({ props, label = "", checked = false, onChange = () => { } }) {
    return (
        <CheckboxWrapper {...props}>
            <FormControlLabel
                control={
                    <StyledCheckbox
                        checked={checked}
                        onChange={(e) => onChange(e.target.checked)}
                    />
                }
                label={label}
            />
        </CheckboxWrapper>
    )
}
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { styled as MUIStyled } from "@mui/system";
import { Switch } from "@mui/material";

const CustomSwitch = MUIStyled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme, checked, on_label, off_label }) => ({
    width: 105,
    height: 40,
    padding: 0,
    display: 'flex',
    '& .MuiSwitch-switchBase': {
        padding: 4,
        '&.Mui-checked': {
            transform: 'translateX(65px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: '#21BFBC',
                opacity: 1,
                border: 0,
            },
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 32,
        height: 32,
        backgroundColor: '#fff',
    },
    '& .MuiSwitch-track': {
        borderRadius: 20,
        backgroundColor: '#21BFBC',
        opacity: checked ? 1 : 0.5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 10px',
        '&:before': {
            content: checked ? `"${on_label}"` : '""',
            color: '#fff',
            fontSize: 12,
            fontWeight: 600,
        },
        '&:after': {
            content: !checked ? `"${off_label}"` : '""',
            color: '#fff',
            fontSize: 12,
            fontWeight: 600,
        },
    },
}));

export default function CustomToggle({ name, on_label = 'true', off_label = 'false', onChange }) {
    const { control } = useFormContext();
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <CustomSwitch
                    {...field}
                    id={`switch-${name}`}
                    checked={field.value}
                    onChange={(e) => {
                        field.onChange(e.target.checked);
                        if (onChange) {
                            onChange(e.target.checked);
                        }
                    }}
                    on_label={on_label}
                    off_label={off_label}
                />
            )}
        />
    );
}
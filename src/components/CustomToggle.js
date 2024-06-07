import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { styled as MUIStyled } from "@mui/system";
import { Switch } from "@mui/material";
const CustomSwitch = MUIStyled(React.forwardRef((props, ref) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple ref={ref} {...props} />
)))(({ checked, labels }) => ({
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
            content: checked ? `"${labels[0]}"` : '""',
            color: '#fff',
            fontSize: 12,
            fontWeight: 600,
        },
        '&:after': {
            content: !checked ? `"${labels[1]}"` : '""',
            color: '#fff',
            fontSize: 12,
            fontWeight: 600,
        },
    },
}));

export default function CustomToggle({ name, labels = ['true', 'false'], onChange }) {
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
                    labels={labels}
                />
            )}
        />
    );
}

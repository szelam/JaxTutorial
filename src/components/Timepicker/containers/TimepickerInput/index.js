import React from "react";
import { StyledTimePicker } from "./styles";
import { TimePicker } from "@mui/x-date-pickers";
import { useFormContext } from 'react-hook-form';
import moment from 'moment';

export default function TimepickerInput({ name = "", label = "", minTime = moment('00:00', 'HH:mm'), maxTime = moment('23:59', 'HH:mm') }) {
    const { register, setValue, watch } = useFormContext();

    return (
        <StyledTimePicker
            ampm={false}
            minTime={minTime}
            maxTime={maxTime}
            label={label}
            {...register(name)} // Register the input with React Hook Form
            value={watch(name) ? moment(watch(name), 'HH:mm') : null} // Get the current value from React Hook Form and convert it to a moment object
            onChange={(newValue) => {
                setValue(name, newValue.format('HH:mm')); // Update the value in React Hook Form
            }} />
    )
}
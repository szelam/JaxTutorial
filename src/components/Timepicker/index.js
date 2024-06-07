import React from "react";
import { TimepickerContainer, TimepickerInputsContainer, Title } from "./styles";
import CustomCheckbox from "../CustomCheckbox";
import TimepickerInput from "./containers/TimepickerInput";
import { useFormContext } from "react-hook-form";
import moment from "moment";

export default function Timepicker({ name, label }) {
    const { setValue, watch } = useFormContext();

    // const startTime = watch(name)?.start;
    // const endTime = watch(name)?.end;

    // const minTime = startTime ? moment(startTime, "HH:mm") : null;
    // const maxTime = endTime ? moment(endTime, "HH:mm") : null;

    return (
        <TimepickerContainer>
            <Title>{label}</Title>
            <CustomCheckbox label="24 hours" onChange={() => setValue(name, { start: "00:00", end: "23:59" })} />
            <TimepickerInputsContainer>
                <TimepickerInput name={`${name}.start`} label="From" maxTime={moment(watch(name)?.end, "HH:mm")} />
                <TimepickerInput name={`${name}.end`} label="To" minTime={moment(watch(name)?.start, "HH:mm")} />
            </TimepickerInputsContainer>
        </TimepickerContainer>
    )
}
import React from "react";
import { TimepickerContainer, TimepickerInputsContainer, Title } from "./styles";
import CustomCheckbox from "../CustomCheckbox";
import TimepickerInput from "./containers/TimepickerInput";
import { useFormContext } from "react-hook-form";
import moment from "moment";

export default function Timepicker({ name, label }) {
    const { setValue, watch } = useFormContext();

    // const fromTime = watch(name)?.from;
    // const toTime = watch(name)?.to;

    // const minTime = fromTime ? moment(fromTime, "HH:mm") : null;
    // const maxTime = toTime ? moment(toTime, "HH:mm") : null;

    return (
        <TimepickerContainer>
            <Title>{label}</Title>
            <CustomCheckbox label="24 hours" onChange={() => setValue(name, { from: "00:00", to: "23:59" })} />
            <TimepickerInputsContainer>
                <TimepickerInput name={`${name}.from`} label="From" maxTime={moment(watch(name)?.to, "HH:mm")} />
                <TimepickerInput name={`${name}.to`} label="To" minTime={moment(watch(name)?.from, "HH:mm")} />
            </TimepickerInputsContainer>
        </TimepickerContainer>
    )
}
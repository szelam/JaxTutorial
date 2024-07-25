import React, { useCallback, useMemo } from 'react';
import { CustomizerRow, Title, Container, Customizer } from "./styles";
import TimepickerInput from "../../../../../../components/Timepicker/containers/TimepickerInput";
import moment from "moment";
import CustomIconButton from "../../../../../../components/CustomIconButton";
import CustomInput from "../../../../../../components/CustomInput";
import { Add, Remove } from "@mui/icons-material";
import { useFieldArray, useFormContext } from "react-hook-form";
import UndoIcon from '@mui/icons-material/Undo';

export default function DayCustomizer({ day, index }) {
    const { control, watch, getValues } = useFormContext();
    const { fields, append, remove } = useFieldArray({
        control,
        name: "HourlyPolicies",
    });

    const handleAdd = useCallback(() => {
        append({ weekday: index, from: "00:00", to: "23:59", min: 1, max: null });
    }, [append, index]);

    const handleRemove = useCallback((i) => {
        remove(i);
        console.log(getValues("HourlyPolicies"));
    }, [remove]);

    const hourlyPolicies = watch('HourlyPolicies');

    const filteredFields = useMemo(() => {
        return hourlyPolicies.reduce((result, item, i) => {
            if (item.weekday === index) {
                result.push(
                    <Customizer key={i}>
                        <CustomizerRow>
                            <TimepickerInput style={{ width: '100%' }} name={`HourlyPolicies[${i}].from`} label="" minTime={moment("00:00")} maxTime={moment("23:59")} />
                            <TimepickerInput style={{ marginLeft: '100px', width: '100%' }} name={`HourlyPolicies[${i}].to`} label="" minTime={moment("00:00")} maxTime={moment("23:59")} />
                            {result.length === 0 &&
                                <CustomIconButton style={{ marginLeft: '20px' }} onClick={handleAdd}>
                                    <Add />
                                </CustomIconButton>
                            }
                            <CustomIconButton style={{ marginLeft: '20px' }} onClick={() => handleRemove(i)}>
                                <Remove />
                            </CustomIconButton>
                        </CustomizerRow>
                        <CustomizerRow>
                            <span>
                                Min. hour (s)
                            </span>
                            <CustomInput name={`HourlyPolicies[${i}].min`} width='200px' style={{ marginLeft: '20px', marginRight: '40px' }} />
                            <span>
                                Max. hour (s)
                            </span>
                            <CustomInput name={`HourlyPolicies[${i}].max`} width='200px' style={{ marginLeft: '20px' }} />
                        </CustomizerRow>
                    </Customizer>
                );
            }
            return result;
        }, []);
    }, [hourlyPolicies, index, handleAdd, handleRemove, fields.length]);

    return (
        <Container>
            <Title>
                {day}
            </Title>
            {filteredFields}
        </Container>
    );
}

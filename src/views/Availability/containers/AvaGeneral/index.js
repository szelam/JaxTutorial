import { Row, SwitchContainer, SwitchLabel, RowGroup } from "./styles";
import CustomToggle from "../../../../components/CustomToggle";
import CustomIconButton from "../../../../components/CustomIconButton";
import Datepicker from "../../../../components/Datepicker";
import Title from "../../components/Title";
import { Add } from "@mui/icons-material";
import { useFieldArray, useFormContext } from "react-hook-form";

export default function AvaGeneral({ setAlways }) {
    const { control, register, getValues } = useFormContext();
    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        control, // control props comes from useForm (optional: if you are using FormContext)
        name: "blockedPeriods", // unique name for your Field Array
    });

    const handleAdd = () => {
        append({});
    }

    const handleRemove = () => {
        remove(fields.length - 1);
    }

    return (
        <>
            <Row>
                <Datepicker name="availablePeriod.from" label="Start Date" />
                <Datepicker name="availablePeriod.to" label="Until" />
                <SwitchContainer>
                    <SwitchLabel>Always available</SwitchLabel>
                    <CustomToggle
                        name="alwaysAvailable"
                        labels={["", ""]}
                        onChange={(e) => setAlways(e)}
                    />
                </SwitchContainer>
            </Row>
            <RowGroup>
                <Title title="Block any designated period that is not available for booking" />
                {fields.map((field, index) => (
                    <Row>
                        <Datepicker name={`blockedPeriods[${index}].from`} label="Start Date" />
                        <Datepicker name={`blockedPeriods[${index}].to`} label="Until" />
                        <CustomIconButton onClick={() => { }}>
                            <Add />
                        </CustomIconButton>
                    </Row>
                ))}
            </RowGroup>
        </>
    );
}

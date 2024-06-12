import Title from "../../components/Title";
import {
    CustomSelect,
    DayChooser,
    RowGroup,
    DayChooserRow,
    ResetButton,
    ButtonRow,
    CustomButton,
} from "./styles";
import { DOTWP, DOTWPL } from "../../../../constants/dotw";
import DayCustomizer from "./container/DayCustomizer";

export default function AvaDaytime() {
    const handleSelect = (event) => {
        console.log(event.target.value);
    };

    return (
        <RowGroup>
            <Title title="Select the available day (s) and time (s)" />
            <CustomSelect onChange={handleSelect}>
                <option>Customized</option>
                <option>Monday to Friday</option>
                <option>Saturday, Sunday & PH</option>
                <option>Monday to Sunday & PH</option>
            </CustomSelect>
            <DayChooserRow>
                {DOTWP.map((day) => (
                    <DayChooser key={day}>{day}</DayChooser>
                ))}
                <ResetButton>reset</ResetButton>
            </DayChooserRow>
            <ButtonRow>
                <CustomButton>Undo All</CustomButton>
                <CustomButton>Customize</CustomButton>
                <CustomButton>Delete All</CustomButton>
            </ButtonRow>
            {DOTWPL.map((day) => (
                <DayCustomizer day={day} />
            ))}
        </RowGroup>
    );
}

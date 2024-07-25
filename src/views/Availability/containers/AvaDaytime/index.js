import Title from "../../components/Title";
import {
    CustomSelect,
    RowGroup,
    DayChooserRow,
    ResetButton,
    ButtonRow,
    CustomButton,
} from "./styles";
import { DOTWP, DOTWPL } from "../../../../constants/dotw";
import DayCustomizer from "./container/DayCustomizer";
import { useFormContext } from "react-hook-form";
import DayChooser from "./container/DayChooser";
import { useEffect, useState } from "react";

export default function AvaDaytime() {
    const { watch, getValues, setValue } = useFormContext();
    const [dayChooseMode, setDayChooseMode] = useState(0);

    useEffect(() => {
        const values = getValues("HourlyPolicies");
        const weekdays = values.map((item) => item.weekday);
        if (weekdays.length === 5 && weekdays.every((weekday) => weekday < 5)) {
            setDayChooseMode(1);
        } else if (weekdays.length === 3 && weekdays.every((weekday) => weekday > 4)) {
            setDayChooseMode(2);
        } else if (weekdays.length === 8) {
            setDayChooseMode(3);
        } else {
            setDayChooseMode(0);
        }
    }, []);

    const handleSelect = (event) => {
        setDayChooseMode(event.target.value);
        const values = getValues("HourlyPolicies")
        switch (event.target.value) {
            case '1':
                setValue("HourlyPolicies", values.filter((x) => x.weekday < 5));
                for (let i = 0; i < 5; i++) {
                    const existingEntry = values.find((x) => x.weekday === i);
                    if (!existingEntry) {
                        setValue("HourlyPolicies", [...getValues("HourlyPolicies"), { weekday: i, from: "00:00", to: "23:59", min: 1, max: null }]);
                    }
                }
                break;
            case '2':
                setValue("HourlyPolicies", values.filter((x) => x.weekday > 4));
                for (let i = 5; i < 8; i++) {
                    const existingEntry = values.find((x) => x.weekday === i);
                    if (!existingEntry) {
                        setValue("HourlyPolicies", [...getValues("HourlyPolicies"), { weekday: i, from: "00:00", to: "23:59", min: 1, max: null }]);
                    }
                }
                break;
            case '3':
                for (let i = 0; i < 8; i++) {
                    const existingEntry = values.find((x) => x.weekday === i);
                    if (!existingEntry) {
                        setValue("HourlyPolicies", [...getValues("HourlyPolicies"), { weekday: i, from: "00:00", to: "23:59", min: 1, max: null }]);
                    }
                }
                break;
        }
    };

    return (
        <RowGroup>
            <Title title="Select the available day (s) and time (s)" />
            <CustomSelect onChange={handleSelect}>
                <option value={0}>Customized</option>
                <option value={1}>Monday to Friday</option>
                <option value={2}>Saturday, Sunday & PH</option>
                <option value={3}>Monday to Sunday & PH</option>
            </CustomSelect>
            <DayChooserRow>
                {DOTWP.map((item, index) => {
                    if (watch("HourlyPolicies").findIndex((x) => x.weekday === index) === -1) {
                        return (
                            <DayChooser key={index} day={item} index={index} disabled={dayChooseMode != 0} />
                        );
                    } else {
                        return (
                            <DayChooser key={index} selected day={item} index={index} disabled={dayChooseMode != 0} />
                        );
                    }
                })}
                <ResetButton>reset</ResetButton>
            </DayChooserRow>
            <ButtonRow>
                <CustomButton>Undo All</CustomButton>
                <CustomButton>Customize</CustomButton>
                <CustomButton>Delete All</CustomButton>
            </ButtonRow>
            {DOTWPL.map((item, index) => {
                const hasEntry = watch("HourlyPolicies").some((x) => x.weekday === index);
                if (hasEntry) {
                    return <DayCustomizer key={index} index={index} day={item} />;
                }
                return null;
            })}
        </RowGroup>
    );
}

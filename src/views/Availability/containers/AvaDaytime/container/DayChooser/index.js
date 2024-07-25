import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import { DOTWP } from "../../../../../../constants/dotw";

export const Container = styled.button`
  margin: 10px 10px 5px;
  padding: 10px;
  border-radius: 10px;
  border-width: 3px;
  border-style: solid;
  transition: all 300ms ease-in-out 0s;
  cursor: pointer;
`;

export default function DayChooser({ selected = false, day, index, disabled }) {
    const { getValues, setValue } = useFormContext();

    const handleClick = () => {
        if (disabled) return;
        if (selected) {
            const values = getValues("HourlyPolicies");
            // const index = values.HourlyPolicies.findIndex((x) => x.weekday === day);
            setValue(
                "HourlyPolicies",
                values.filter((x) => x.weekday !== index)
            );
        } else {
            setValue("HourlyPolicies", [
                ...getValues().HourlyPolicies,
                { weekday: index, from: "00:00", to: "23:59", min: 1, max: null },
            ]);
        }
        console.log(getValues("HourlyPolicies"));
        // console.log("DayChooser", day, getValues('HourlyPolicies'));
    };

    return (
        <Container
            style={{
                borderColor: selected ? "rgb(186, 234, 233)" : "transparent",
                color: disabled && !selected ? "#FFF" : "rgb(186, 234, 233)",
                backgroundColor: disabled && !selected ? "#DEDEDE" : "rgb(242, 255, 255)",
            }}
            onClick={handleClick}
        >
            {day}
        </Container>
    );
}

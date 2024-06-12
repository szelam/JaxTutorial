import { CustomizerRow, Title, Container, Customizer } from "./styles";
import TimepickerInput from "../../../../../../components/Timepicker/containers/TimepickerInput";
import moment from "moment";

export default function DayCustomizer({ day }) {
    return (
        <Container>
            <Title>
                {day}
            </Title>
            <Customizer>
                <CustomizerRow>
                    <TimepickerInput name="HourlyPolicies[0].from" label="" minTime={moment("00:00")} maxTime={moment("23:59")} />
                    <TimepickerInput name="HourlyPolicies[0].to" label="" minTime={moment("00:00")} maxTime={moment("23:59")} />
                </CustomizerRow>
                <CustomizerRow>

                </CustomizerRow>
            </Customizer>
        </Container>
    )
}
import { useFormContext } from "react-hook-form";
import { ActionButtonContainer, Container, CustomButton, CustomPillButton, CustomSecondaryButton } from "./styles";
import moment from "moment";
import CustomIconButton from "../../../../components/CustomIconButton";
import { Add } from "@mui/icons-material";

export default function ActionRow() {
    const { watch } = useFormContext();

    return (
        <Container>
            <ActionButtonContainer>
                <CustomButton>{moment(watch("availablePeriod.from")).format("DD MMM YYYY")}</CustomButton>
                <CustomIconButton>
                    <Add />
                </CustomIconButton>
            </ActionButtonContainer>
            <CustomPillButton>Hourly</CustomPillButton>
            <ActionButtonContainer>
                <CustomButton>Save</CustomButton>
                <CustomSecondaryButton>Back</CustomSecondaryButton>
            </ActionButtonContainer>
        </Container>
    )
}
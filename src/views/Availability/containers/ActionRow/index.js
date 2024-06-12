import { useFormContext } from "react-hook-form";
import { ActionButtonContainer, Container, CustomButton, CustomSecondaryButton } from "./styles";


export default function ActionRow() {
    const { watch } = useFormContext();

    return (
        <Container>
            <CustomButton>{watch("availablePeriod.from")}</CustomButton>
            <ActionButtonContainer>
                <CustomButton>Save</CustomButton>
                <CustomSecondaryButton>Back</CustomSecondaryButton>
            </ActionButtonContainer>
        </Container>
    )
}
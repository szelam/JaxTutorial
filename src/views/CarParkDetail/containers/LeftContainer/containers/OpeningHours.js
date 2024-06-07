import React from "react";
import { Title } from "../../../styles";
import Row from "../../Row";
import { useFormContext } from "react-hook-form";
import CustomCheckbox from "../../../../../components/CustomCheckbox";

export default function OpeningHours() {
    const { register } = useFormContext();

    return (
        <>
            <Title>Opening Hours</Title>
            <Row>
                <CustomCheckbox label="Hi" />
            </Row>
        </>
    )
}
import React from "react";
import {
    RightPanel,
    RowImg,
    CustomSelect,
    Title,
    RowBackgroundWrapper,
    RowBackgroundWrapperSpace,
} from "../../styles";
import CustomInput from "../../../../components/CustomInput";
import Row from "../Row";
import CustomToggle from "../../../../components/CustomToggle";
import ImageRadioGroup from "../../../../components/ImageRadioGroup";
import { useFormContext } from "react-hook-form";

export default function RightContainer() {
    const { register } = useFormContext();

    return (
        <RightPanel>
            <Row title="Region / District" required>
                <CustomSelect {...register("region")}>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                </CustomSelect>
            </Row>
            <Row title="Address Title (Eng)">
                <CustomInput name="addresseng" label="Address Title (Eng)" />
            </Row>
            <Row title="Address Title (Chi)">
                <CustomInput name="addresschi" label="Address Title (Chi)" />
            </Row>
            <Row title="Address Details" required>
                <CustomInput name="addressdetails" label="Address Details" multiline />
            </Row>
            <RowImg src="/img/map.jpg" alt="placeholder"></RowImg>
            <Title>Features</Title>
            <RowBackgroundWrapper>
                <Row title="Cover" required>
                    <ImageRadioGroup
                        name="cover"
                        options={[
                            { label: "Indoor", imageSrc: "/img/cover1.png" },
                            { label: "With-cover", imageSrc: "/img/cover2.png" },
                            { label: "No-cover", imageSrc: "/img/cover3.png" },
                        ]}
                    />
                </Row>
                <Row title="priority">
                    <CustomInput
                        name="coverpriority"
                        label="priority"
                        width="100px"
                        number
                    />
                </Row>
            </RowBackgroundWrapper>
            <RowBackgroundWrapperSpace>
                <Row title="EvCharge">
                    <CustomToggle name="evcharge" label="EvCharge" />
                </Row>
                <Row title="priority">
                    <CustomInput
                        name="evchargepriority"
                        label="priority"
                        width="100px"
                        number
                    />
                </Row>
            </RowBackgroundWrapperSpace>
            <RowBackgroundWrapper>
                <Row title="Instant booking">
                    <CustomToggle name="booking" label="Instant booking" />
                </Row>
                <Row title="priority">
                    <CustomInput
                        name="bookingpriority"
                        label="priority"
                        width="100px"
                        number
                    />
                </Row>
            </RowBackgroundWrapper>
        </RightPanel>
    );
}

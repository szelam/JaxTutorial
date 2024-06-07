import React from "react";
import { CustomSelect } from "../../../styles";
import CustomInput from "../../../../../components/CustomInput";
import CustomToggle from "../../../../../components/CustomToggle";
import CustomCheckboxGroup from "../../../../../components/CustomCheckboxGroup";
import Row from "../../Row";
import CustomRadioGroup from "../../../../../components/CustomRadioGroup";
import ImageCheckboxGroup from "../../../../../components/ImageCheckboxGroup";
import AddCarparkEmail from "../containers/AddCarparkEmail";
import { useFormContext } from "react-hook-form";

export default function GeneralInfo() {
    const { register } = useFormContext();
    return (
        <>

            <Row title="Status">
                <CustomToggle name="status" on_label="Active" off_label="Inactive" />
            </Row>
            <Row title="Carpark ID">663132e7f98626402db282d8</Row>
            <Row title="Carpark Name (Eng)" required>
                <CustomInput name="nameeng" label="Carpark Name (Eng)" />
            </Row>
            <Row title="Carpark Name (Chi)" required>
                <CustomInput name="namechi" label="Carpark Name (Chi)" />
            </Row>
            <Row title="CarPark Code" required>
                <CustomInput name="code" label="CarPark Code" />
            </Row>
            <Row title="Carpark Type" required>
                <CustomSelect {...register("type")}>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                </CustomSelect>
            </Row>
            <Row title="Carpark management">
                <CustomSelect {...register("management")}>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                </CustomSelect>
            </Row>
            <Row title="Carpark telephone" required>
                <CustomSelect {...register("telephonesuffix")}>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                </CustomSelect>
                <CustomInput name="telephone" number label="Carpark telephone" />
            </Row>
            <AddCarparkEmail />
            <Row title="CarPark Notice Hotline">
                <CustomInput name="hotline" label="CarPark Notice Hotline" number />
            </Row>
            <Row title="CarPark Notice Email">
                <CustomInput name="noticeemail" label="CarPark Notice Email" />
            </Row>
            <Row title="Space suitable for" required>
                <ImageCheckboxGroup
                    name="suitablefor"
                    labels={[
                        ["car", "Private Car", "/img/motor1.png"],
                        ["oldcar", "Private Car (Old)", "/img/motor3.png"],
                        ["motorcycle", "Motorcycle (Old)", "/img/motor2.png"],
                    ]}
                />
            </Row>
            <Row title="Payment Methods">
                <CustomCheckboxGroup
                    name="paymentmethods"
                    labels={["Octopus Card 八達通", "Cash 現金"]}
                />
            </Row>
            <Row title="Restrictions" required>
                <CustomCheckboxGroup
                    name="restrictions"
                    labels={["no", "owners", "parkers", "visitors", "resident"]}
                />
            </Row>
            <Row title="Access Type" required>
                <CustomRadioGroup
                    name="accesstype"
                    labels={[
                        "Access Card",
                        "Octopus",
                        "License Plate Recognition System",
                        "No",
                    ]}
                />
            </Row>
            <Row title="Headroom" required>
                <CustomSelect {...register("headroom")}>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                </CustomSelect>
            </Row>
            <Row title="Service Tags">
                <CustomSelect {...register("servicetag")}>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                </CustomSelect>
            </Row>
            <Row title="Building Tags for OCR Check (Eng)">
                <CustomSelect {...register("buildtageng")}>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                </CustomSelect>
            </Row>
            <Row title="Building Tags for OCR Check (Chi)">
                <CustomSelect {...register("buildtagchi")}>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                </CustomSelect>
            </Row>
            <Row title="Service Type Title (Eng)" required>
                <CustomInput name="servicetypeeng" label="Service Type Title (Eng)" />
            </Row>
            <Row title="Service Type Title (Chi)" required>
                <CustomInput name="servicetypechi" label="Service Type Title (Chi)" />
            </Row>
            <Row title="Remark (Eng)">
                <CustomInput name="remarkeng" label="Remark (Eng)" />
            </Row>
            <Row title="Remark (Chi)">
                <CustomInput name="remarkchi" label="Remark (Chi)" />
            </Row>
            <Row title="Priority">
                <CustomInput name="priority" label="Priority" number />
            </Row>
            <Row
                spacebetween
                title="Sync to SHKP System for Monthly Occupancy Status"
                tooltip="Sync on 1st day every month at 10AM (Spaces with multiple car types are not supported)"
            >
                <CustomToggle name="sync" on_label="On" off_label="Off" />
            </Row>
            <Row title="Parking Contractor">
                <CustomSelect name="contractor" label="Parking Contractor">
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                </CustomSelect>
            </Row>
            <Row title="Ev Contractor">
                <CustomSelect name="evcontractor" label="Ev Contractor">
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                </CustomSelect>
            </Row>
        </>
    )
}
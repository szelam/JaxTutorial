import React, { useEffect, useState } from "react";
import { CustomSelect } from "../../../styles";
import CustomInput from "../../../../../components/CustomInput";
import CustomToggle from "../../../../../components/CustomToggle";
import CustomCheckboxGroup from "../../../../../components/CustomCheckboxGroup";
import Row from "../../Row";
import CustomRadioGroup from "../../../../../components/CustomRadioGroup";
import ImageCheckboxGroup from "../../../../../components/ImageCheckboxGroup";
import AddCarparkEmail from "../containers/AddCarparkEmail";
import { useFormContext } from "react-hook-form";
import { useAuth } from "../../../../../providers/AuthProvider";
import { API_URL } from "../../../../../constants/api";

export default function GeneralInfo() {
    const { carparkId, token } = useAuth();
    const [paymentMethodsData, setPaymentMethodsData] = useState([]);
    const [vehicleTypesData, setVehicleTypesData] = useState([]);

    useEffect(() => {
        getDynamicData();
    }, []);

    const getDynamicData = async () => {
        try {
            const paymentMethods = await fetch(API_URL + "/paymentMethod", {
                method: "GET",
                headers: {
                    Authorization:
                        "Bearer " + token,
                },
            });
            const vehicleTypes = await fetch(
                API_URL + "/vehicleType?_populate=Icon",
                {
                    method: "GET",
                    headers: {
                        Authorization:
                            "Bearer " + token,
                    },
                }
            );

            const paymentMethodsJson = await paymentMethods.json();
            const vehicleTypesJson = await vehicleTypes.json();
            setPaymentMethodsData(paymentMethodsJson.records);
            setVehicleTypesData(vehicleTypesJson.records);
        } catch (error) {
            console.error(error);
        }
    };

    const { register } = useFormContext();
    return (
        <>
            <Row title="Status">
                <CustomToggle
                    name="status"
                    labels={["Active", "Inactive"]}
                    values={["active", "inactive"]}
                />
            </Row>
            <Row title="Carpark ID">{carparkId}</Row>
            <Row title="Carpark Name (Eng)" required>
                <CustomInput name="name.en" label="Carpark Name (Eng)" />
            </Row>
            <Row title="Carpark Name (Chi)" required>
                <CustomInput name="name.zh" label="Carpark Name (Chi)" />
            </Row>
            <Row title="CarPark Code" required>
                <CustomInput name="code" label="CarPark Code" />
            </Row>
            <Row title="Carpark Type" required>
                <CustomSelect {...register("address.type")}>
                    <option value="" disabled selected>
                        Please select
                    </option>
                    <option value="commercial">Commercial</option>
                    <option value="industrial">Industrial</option>
                    <option value="residential">Residential</option>
                </CustomSelect>
            </Row>
            <Row title="Carpark management">
                <CustomSelect {...register("management")}>
                    <option value="" disabled selected>
                        Please select
                    </option>
                    <option value="HYCarpark">HY Carpark</option>
                    <option value="KSCarpark">KS Carpark</option>
                </CustomSelect>
            </Row>
            <Row title="Carpark telephone" required>
                <CustomSelect {...register("contact.phone.code")}>
                    <option value="" disabled selected>
                        Please select
                    </option>
                    <option value="852">+852</option>
                    <option value="001">+001</option>
                </CustomSelect>
                <CustomInput
                    name="contact.phone.number"
                    number
                    label="Carpark telephone"
                />
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
                    name="VehicleTypes"
                    options={vehicleTypesData
                        .filter((item) => item.Icon)
                        .map((item) => ({
                            value: item._id,
                            label: `${item.name.en} ${item.name.zh}`,
                            img: item.Icon.fileUrl,
                        }))}
                />
            </Row>
            <Row title="Payment Methods">
                <CustomCheckboxGroup
                    name="PaymentMethods"
                    labels={paymentMethodsData.map(
                        (item) => `${item.name.en} ${item.name.zh}`
                    )}
                    values={paymentMethodsData.map((item) => item._id)}
                />
            </Row>
            <Row title="Restrictions" required>
                <CustomCheckboxGroup
                    name="restrictions"
                    labels={["no", "owners", "parkers", "visitors", "resident"]}
                    values={["no", "owners", "parkers", "visitors", "resident"]}
                />
            </Row>
            <Row title="Access Type" required>
                <CustomRadioGroup
                    name="accessType"
                    labels={[
                        "Access Card",
                        "Octopus",
                        "License Plate Recognition System",
                        "No",
                    ]}
                    values={["access card", "octopus card", "contactless", "no"]}
                />
            </Row>
            <Row title="Headroom" required>
                <CustomSelect {...register("features.headRoom.value")}>
                    <option value="" disabled selected>
                        Please select
                    </option>
                    {Array.from({ length: 35 }, (_, index) => (
                        <option value={(index / 10 + 1.6).toFixed(1)}>
                            {(index / 10 + 1.6).toFixed(1)}m
                        </option>
                    ))}
                    <option value="5.0+">above 5.0m</option>
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
                <CustomInput
                    name="serviceTypeTitle.en"
                    label="Service Type Title (Eng)"
                />
            </Row>
            <Row title="Service Type Title (Chi)" required>
                <CustomInput
                    name="serviceTypeTitle.zh"
                    label="Service Type Title (Chi)"
                />
            </Row>
            <Row title="Remark (Eng)">
                <CustomInput name="remarks.en" label="Remark (Eng)" />
            </Row>
            <Row title="Remark (Chi)">
                <CustomInput name="remarks.zh" label="Remark (Chi)" />
            </Row>
            <Row title="Priority">
                <CustomInput name="priority" label="Priority" number />
            </Row>
            <Row
                spacebetween
                title="Sync to SHKP System for Monthly Occupancy Status"
                tooltip="Sync on 1st day every month at 10AM (Spaces with multiple car types are not supported)"
            >
                <CustomToggle
                    name="syncMonthlyOccupancyStatusToSHKP"
                    labels={["On", "Off"]}
                />
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
    );
}

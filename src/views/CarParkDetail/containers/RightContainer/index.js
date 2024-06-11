import React, { useEffect, useMemo, useState } from "react";
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
import GMap from "./container/Map";
import SyncedMapInput from "./container/SyncedMapInput";
import { API_URL } from "../../../../constants/api";
import { useAuth } from "../../../../providers/AuthProvider";

export default function RightContainer() {
    const { register, setValue, watch, getValues } = useFormContext();
    const [districtData, setDistrictData] = useState([]);
    const { token } = useAuth();

    useEffect(() => {
        getDynamicData()
    }, []);

    const getDynamicData = async () => {
        try {
            const districts = await fetch(API_URL + "/district", {
                method: "GET",
                headers: {
                    Authorization:
                        "Bearer " + token,
                },
            });

            const data = await districts.json();
            setDistrictData(data.records);
        } catch (error) {
            console.error(error);
        }
    };

    const coordinates = watch("address.location.coordinates") || [];
    const noCoordinates = useMemo(
        () => coordinates.filter((e) => !e).length > 0 || coordinates.length === 0,
        [coordinates]
    );

    return (
        <RightPanel>
            <Row title="Region / District" required>
                <CustomSelect {...register("address.District")}>
                    <option value="" disabled selected>
                        Please select
                    </option>
                    {districtData.map((district) => (
                        <option key={district._id} value={district._id}>
                            {district.name.en} {district.name.zh}
                        </option>
                    ))}
                </CustomSelect>
            </Row>
            <Row title="Address Title (Eng)">
                <CustomInput name="address.line.en" label="Address Title (Eng)" />
            </Row>
            <Row title="Address Title (Chi)">
                <CustomInput name="address.line.zh" label="Address Title (Chi)" />
            </Row>
            <Row title="Address Details" required>
                <SyncedMapInput
                    onEnter={(pos, address) => {
                        setValue("address.location.coordinates", [pos.lng, pos.lat]);
                        setValue("address.details", address);
                    }}
                />
            </Row>
            <GMap
                onDragEnd={(pos, address) => {
                    // console.log(pos, address);
                    setValue("address.location.coordinates", [pos.lng, pos.lat]);
                    setValue("address.details", address);
                }}
                marker={
                    noCoordinates
                        ? {}
                        : {
                            lat: parseFloat(watch("address.location.coordinates[1]")),
                            lng: parseFloat(watch("address.location.coordinates[0]")),
                        }
                }
                center={
                    noCoordinates
                        ? { lat: 22.3193, lng: 114.1694 }
                        : {
                            lat: parseFloat(watch("address.location.coordinates[1]")),
                            lng: parseFloat(watch("address.location.coordinates[0]")),
                        }
                }
            />
            <Title>Features</Title>
            <RowBackgroundWrapper>
                <Row title="Cover" required>
                    <ImageRadioGroup
                        name="features.cover.value"
                        options={[
                            { label: "Indoor", imageSrc: "/img/cover1.png", value: "indoor" },
                            {
                                label: "With-cover",
                                imageSrc: "/img/cover2.png",
                                value: "with-cover",
                            },
                            {
                                label: "No-cover",
                                imageSrc: "/img/cover3.png",
                                value: "no-cover",
                            },
                        ]}
                    />
                </Row>
                <Row title="priority">
                    <CustomInput
                        name="features.cover.priority"
                        label="priority"
                        width="100px"
                        number
                    />
                </Row>
            </RowBackgroundWrapper>
            <RowBackgroundWrapperSpace>
                <Row title="EvCharge">
                    <CustomToggle
                        name="features.evCharge.value"
                        label="EvCharge"
                        values={["true", "false"]}
                    />
                </Row>
                <Row title="priority">
                    <CustomInput
                        name="features.evCharge.priority"
                        label="priority"
                        width="100px"
                        number
                    />
                </Row>
            </RowBackgroundWrapperSpace>
            <RowBackgroundWrapper>
                <Row title="Instant booking">
                    <CustomToggle
                        name="features.instantBooking.value"
                        label="Instant booking"
                        values={["true", "false"]}
                    />
                </Row>
                <Row title="priority">
                    <CustomInput
                        name="features.instantBooking.priority"
                        label="priority"
                        width="100px"
                        number
                    />
                </Row>
            </RowBackgroundWrapper>
        </RightPanel>
    );
}

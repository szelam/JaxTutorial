import React from 'react';
import { RightPanel, RowImg, CustomSelect, Title, RowBackgroundWrapper, RowBackgroundWrapperSpace } from '../../styles';
import CustomInput from '../../../../components/CustomInput';
import Row from '../Row';
import CustomToggle from '../../../../components/CustomToggle';
import ImageRadioGroup from '../../../../components/ImageRadioGroup';

export default function RightContainer({ register, control, errors }) {

    return (
        <RightPanel>
            <Row title="Region / District" required>
                <CustomSelect
                    {...register("region")}
                >
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                </CustomSelect>
            </Row>
            <Row title="Address Title (Eng)">
                <CustomInput
                    control={control}
                    name="addresseng"
                    label="Address Title (Eng)"
                    error={errors.addresseng}
                />
            </Row>
            <Row title="Address Title (Chi)">
                <CustomInput
                    control={control}
                    name="addresschi"
                    label="Address Title (Chi)"
                    error={errors.addresschi}
                />
            </Row>
            <Row title="Address Details" required>
                <CustomInput
                    control={control}
                    name="addressdetails"
                    label="Address Details"
                    multiline
                    error={errors.addressdetails}
                />
            </Row>
            <RowImg src="/img/map.jpg" alt="placeholder"></RowImg>
            <Title>Features</Title>
            <RowBackgroundWrapper>
                <Row title="Cover" required>
                    <ImageRadioGroup
                        control={control}
                        name="cover"
                        options={[
                            { label: "Indoor", imageSrc: "/img/cover1.png" },
                            { label: "With-cover", imageSrc: "/img/cover2.png" },
                            { label: "No-cover", imageSrc: "/img/cover3.png" },
                        ]}
                        error={errors.cover}
                    />
                </Row>
                <Row title="priority">
                    <CustomInput
                        control={control}
                        name="coverpriority"
                        label="priority"
                        error={errors.coverpriority}
                        width="100px"
                        number
                    />
                </Row>
            </RowBackgroundWrapper>
            <RowBackgroundWrapperSpace>

                <Row title="EvCharge">
                    <CustomToggle
                        control={control}
                        name="evcharge"
                        label="EvCharge"
                        error={errors.evcharge}
                    />
                </Row>
                <Row title="priority">
                    <CustomInput
                        control={control}
                        name="evchargepriority"
                        label="priority"
                        error={errors.evchargepriority}
                        width="100px"
                        number
                    />
                </Row>
            </RowBackgroundWrapperSpace>
            <RowBackgroundWrapper >
                <Row title="Instant booking">
                    <CustomToggle
                        control={control}
                        name="booking"
                        label="Instant booking"
                        error={errors.booking}
                    />
                </Row>
                <Row title="priority">
                    <CustomInput
                        control={control}
                        name="bookingpriority"
                        label="priority"
                        error={errors.bookingpriority}
                        width="100px"
                        number
                    />
                </Row>
            </RowBackgroundWrapper>
        </RightPanel>
    )
}
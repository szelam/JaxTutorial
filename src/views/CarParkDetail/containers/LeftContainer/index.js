import React from 'react';
import { LeftPanel, CustomSelect } from '../../styles';
import CustomInput from '../../../../components/CustomInput';
import CustomToggle from '../../../../components/CustomToggle';
import CustomCheckbox from '../../../../components/CustomCheckbox';
import Row from '../Row';
import CustomRadioGroup from '../../../../components/CustomRadioGroup';
import ImageCheckbox from '../../../../components/ImageCheckbox';
import CustomAddButton from './containers/CustomAddButton';

export default function LeftContainer({ register, control, errors }) {
    return (

        <LeftPanel>
            <Row title="Status">
                <CustomToggle
                    control={control}
                    name="status"
                    on_label="Active"
                    off_label="Inactive"
                />
            </Row>
            <Row title="Carpark ID">663132e7f98626402db282d8</Row>
            <Row title="Carpark Name (Eng)" required>
                <CustomInput
                    control={control}
                    name="nameeng"
                    label="Carpark Name (Eng)"
                    error={errors.nameeng}
                />
            </Row>
            <Row title="Carpark Name (Chi)" required>
                <CustomInput
                    control={control}
                    name="namechi"
                    label="Carpark Name (Chi)"
                    error={errors.namechi}
                />
            </Row>
            <Row title="CarPark Code" required>
                <CustomInput
                    control={control}
                    name="code"
                    label="CarPark Code"
                    error={errors.code}
                />
            </Row>
            <Row title="Carpark Type" required>
                <CustomSelect
                    {...register("type")}
                >
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                </CustomSelect>
            </Row>
            <Row title="Carpark management">
                <CustomSelect
                    {...register("management")}
                >
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                </CustomSelect>
            </Row>
            <Row title="Carpark telephone" required>
                <CustomSelect
                    {...register("telephonesuffix")}
                >
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                </CustomSelect>
                <CustomInput
                    control={control}
                    name="telephone"
                    number
                    label="Carpark telephone"
                    error={errors.telephone}
                />
            </Row>
            <Row title="Carpark E-mail 1">
                <CustomInput
                    control={control}
                    name="email"
                    label=""
                    error={errors.email}
                />
                <CustomAddButton />
            </Row>
            <Row title="CarPark Notice Hotline">
                <CustomInput
                    control={control}
                    name="hotline"
                    label="CarPark Notice Hotline"
                    error={errors.hotline}
                    number
                />
            </Row>
            <Row title="CarPark Notice Email">
                <CustomInput
                    control={control}
                    name="noticeemail"
                    label="CarPark Notice Email"
                    error={errors.noticeemail}
                />
            </Row>
            <Row title="Space suitable for" required>
                <ImageCheckbox
                    control={control}
                    name="suitablefor"
                    labels={[
                        ['car', 'Private Car', '/img/motor1.png'],
                        ['oldcar', 'Private Car (Old)', '/img/motor3.png'],
                        ['motorcycle', 'Motorcycle (Old)', '/img/motor2.png'],]
                    }
                    error={errors.suitablefor}
                />
            </Row>
            <Row title="Payment Methods">
                <CustomCheckbox
                    control={control}
                    name="paymentmethods"
                    labels={['Octopus Card 八達通', 'Cash 現金']}
                    error={errors.paymentmethods}
                />
            </Row>
            <Row title="Restrictions" required>
                <CustomCheckbox
                    control={control}
                    name="restrictions"
                    error={errors.restrictions}
                    labels={['no', 'owners', 'parkers', 'visitors', 'resident']}
                />
            </Row>
            <Row title="Access Type" required>
                <CustomRadioGroup
                    control={control}
                    name="accesstype"
                    error={errors.accesstype}
                    labels={['Access Card', 'Octopus', 'License Plate Recognition System', 'No']}
                />
            </Row>
            <Row title="Headroom" required>
                <CustomSelect
                    {...register("headroom")}
                >
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                </CustomSelect>
            </Row>
            <Row title="Service Tags">
                <CustomSelect
                    {...register("servicetag")}
                >
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                </CustomSelect>
            </Row>
            <Row title="Building Tags for OCR Check (Eng)">
                <CustomSelect
                    {...register("buildtageng")}
                >
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                </CustomSelect>
            </Row>
            <Row title="Building Tags for OCR Check (Chi)">
                <CustomSelect
                    {...register("buildtagchi")}
                >
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                </CustomSelect>
            </Row>
            <Row title="Service Type Title (Eng)" required>
                <CustomInput
                    control={control}
                    name="servicetypeeng"
                    label="Service Type Title (Eng)"
                    error={errors.servicetypeeng}
                />
            </Row>
            <Row title="Service Type Title (Chi)" required>
                <CustomInput
                    control={control}
                    name="servicetypechi"
                    label="Service Type Title (Chi)"
                    error={errors.servicetypechi}
                />
            </Row>
            <Row title="Remark (Eng)">
                <CustomInput
                    control={control}
                    name="remarkeng"
                    label="Remark (Eng)"
                    error={errors.remarkeng}
                />
            </Row>
            <Row title="Remark (Chi)">
                <CustomInput
                    control={control}
                    name="remarkchi"
                    label="Remark (Chi)"
                    error={errors.remarkchi}
                />
            </Row>
            <Row title="Priority">
                <CustomInput
                    control={control}
                    name="priority"
                    label="Priority"
                    number
                    error={errors.priority}
                />
            </Row>
            <Row spacebetween title="Sync to SHKP System for Monthly Occupancy Status" tooltip="Sync on 1st day every month at 10AM (Spaces with multiple car types are not supported)">
                <CustomToggle
                    control={control}
                    name="sync"
                    on_label="On"
                    off_label="Off"
                />
            </Row>
            <Row title="Parking Contractor">
                <CustomSelect
                    control={control}
                    name="contractor"
                    label="Parking Contractor"
                    error={errors.contractor}
                >
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                </CustomSelect>
            </Row>
            <Row title="Ev Contractor">
                <CustomSelect
                    control={control}
                    name="evcontractor"
                    label="Ev Contractor"
                    error={errors.evcontractor}
                >
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                </CustomSelect>
            </Row>
        </LeftPanel>
    )
}
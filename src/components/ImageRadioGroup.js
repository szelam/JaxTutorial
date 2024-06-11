import React from 'react';
import { FormControlLabel, Radio, RadioGroup, FormControl, FormLabel } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import styled from 'styled-components';

const RadioWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    user-select: none;
    transition: all 300ms ease-in-out 0s;
    flex-grow: 1;
    flex-basis: 25%;
    width: 100px; 
`;

const Image = styled.img`
    width: 42px;
    transition: all 300ms ease-in-out 0s;
`;

const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 72px;
    height: 72px;
    border-radius: 5px;
    background-color: #F1FFFF;
`;

const Label = styled.span`
    margin-top: 5px;
    font-size: 14px;
    text-align: center;
    color: #000; /* Fixed color for the label text */
`;

const RadioGroupWrapper = styled(RadioGroup)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
`;

export default function ImageRadioGroup({ name, options }) {
    const { control } = useFormContext();
    return (
        <FormControl component="fieldset">
            <Controller
                name={name}
                control={control}
                defaultValue={options[0].value}
                render={({ field }) => (
                    <RadioGroupWrapper {...field} row>
                        {options.map((option, index) => (
                            <FormControlLabel
                                key={index}
                                value={option.value}
                                control={
                                    <Radio
                                        disableRipple
                                        icon={
                                            <RadioWrapper>
                                                <ImageWrapper>
                                                    <Image src={option.imageSrc} alt={option.label} />
                                                </ImageWrapper>
                                                <Label>{option.label}</Label>
                                            </RadioWrapper>
                                        }
                                        checkedIcon={
                                            <RadioWrapper>
                                                <ImageWrapper style={{ border: '2px solid rgb(33, 191, 188)', borderRadius: '10px' }}>
                                                    <Image src={option.imageSrc} alt={option.label} />
                                                </ImageWrapper>
                                                <Label>{option.label}</Label>
                                            </RadioWrapper>
                                        }
                                    />
                                }
                                label=""
                            />
                        ))}
                    </RadioGroupWrapper>
                )}
            />
        </FormControl>
    );
}

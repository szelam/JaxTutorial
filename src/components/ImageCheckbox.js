import React from 'react';
import { FormControlLabel } from '@mui/material';
import { Controller } from 'react-hook-form';
import { styled as MUIStyled } from '@mui/system';
import styled from 'styled-components';

const CheckboxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    user-select: none;
    transition: all 300ms ease-in-out 0s;
    flex-grow: 1;
    flex-basis: 25%;
    width: 100%;
`;

const Image = styled.img`
    width: 64px;
    /* transition: all 300ms ease-in-out 0s; */
`;

const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 74px;
    height: 74px;
    /* padding: 5px; */
    border-radius: 5px;
    background-color: #F1FFFF;
`;

const Label = styled.span`
    margin-top: 5px;
    font-size: 14px;
`;

export default function ImageCheckbox({ control, name, label, imageSrc, error }) {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value } }) => (
                <CheckboxWrapper onClick={() => onChange(!value)} style={{ textAlign: 'center' }}>
                    <ImageWrapper
                        style={{
                            border: value ? '2px solid rgb(33, 191, 188)' : '2px solid rgb(33, 191, 188)',
                            borderRadius: '10px',
                        }}>
                        <Image
                            src={imageSrc}
                            alt={label}
                        />
                    </ImageWrapper>
                    <Label>{label}</Label>
                </CheckboxWrapper>
            )}
        />
    );
}
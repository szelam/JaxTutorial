import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import styled from "styled-components";
import {
    FormHelperText,
    FormControl,
    Checkbox,
    FormControlLabel,
} from "@mui/material";
import { styled as MUIStyled } from "@mui/system";

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
  text-align: center;
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
  border-radius: 10px;
  transition: all 300ms ease-in-out 0s;
`;

const CustomFormControl = styled(FormControl)`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
`;

const StyledFormHelperText = MUIStyled(FormHelperText)(() => ({
    position: "absolute",
    bottom: "0",
    transform: "translateY(100%)",
    color: "#FF0000",
}));

export default function ImageCheckboxGroup({ name, labels }) {

    const { control, formState } = useFormContext();
    const error = formState.errors[name];

    return (
        <CustomFormControl error={!!error} style={{ flexDirection: 'row' }}>
            <Controller
                name={name}
                control={control}
                defaultValue={[]}
                error={error}
                render={({ field: { onChange, value } }) => (
                    <>
                        {labels.map((label, index) => (
                            <CheckboxWrapper key={index}>
                                <FormControlLabel
                                    labelPlacement="bottom"
                                    control={
                                        <Checkbox
                                            checked={value.includes(label[0])}
                                            onChange={(e) => {
                                                if (e.target.checked) {
                                                    onChange([...value, label[0]]);
                                                } else {
                                                    onChange(value.filter((v) => v !== label[0]));
                                                }
                                            }}
                                            disableRipple
                                            checkedIcon={
                                                <ImageWrapper
                                                    style={{
                                                        border: '2px solid rgb(33, 191, 188)',
                                                        backgroundColor: '#F1FFFF'
                                                    }}>
                                                    <Image
                                                        src={label[2]}
                                                        alt={label[0]}
                                                    />
                                                </ImageWrapper>
                                            }
                                            icon={
                                                <ImageWrapper
                                                    style={{
                                                        border: '2px solid transparent',
                                                        backgroundColor: 'transparent',
                                                    }}>
                                                    <Image
                                                        src={label[2]}
                                                        alt={label[0]}
                                                    />
                                                </ImageWrapper>
                                            }
                                        />
                                    }
                                    label={label[1]}
                                />
                            </CheckboxWrapper>
                        ))}
                    </>
                )}
            />
            {!!error && <StyledFormHelperText>{error.message}</StyledFormHelperText>}
        </CustomFormControl>
    );
}

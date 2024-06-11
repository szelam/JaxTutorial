import React, { useEffect } from "react";
import { Title } from "../../../../styles";
import { useFormContext } from "react-hook-form";
import CustomCheckbox from "../../../../../../components/CustomCheckbox";
import { Row, Block, TagContainer, TimepickersContainer } from "./styles";
import Tag from "../../../../../../components/Tag";
import Timepicker from "../../../../../../components/Timepicker";
import { DOTW, DOTWL } from './constants';

export default function OpeningHours() {
    const { getValues, watch, setValue } = useFormContext();

    const openingHours = watch("openingHourSetting");

    const handleDelete = (name) => {
        setValue(`openingHourSetting.${name}`, { from: "00:00", to: "00:00" });
        // console.log(getValues("openingHourSetting"));
    };
    const handleAll24Hours = () => {
        const isAll24Hours = checkAll24Hours();
        DOTW.forEach((day) => {
            setValue(`openingHourSetting.${day}`, isAll24Hours ? { from: "00:00", to: "00:00" } : { from: "00:00", to: "23:59" });
        });
    };

    const handleMF24Hours = () => {
        const isMF24Hours = checkMF24Hours();
        DOTW.slice(1, 6).forEach((day) => {
            setValue(`openingHourSetting.${day}`, isMF24Hours ? { from: "00:00", to: "00:00" } : { from: "00:00", to: "23:59" });
        });
    };

    const checkAll24Hours = () => {
        return DOTW.every(
            (day) =>
                openingHours[day].from === "00:00" &&
                openingHours[day].to === "23:59"
        );
    };

    const checkMF24Hours = () => {
        return DOTW.slice(1, 6).every(
            (day) =>
                openingHours[day].from === "00:00" &&
                openingHours[day].to === "23:59"
        );
    };

    return (
        <>
            <Title>Opening Hours</Title>
            <Row>
                <Block>
                    <CustomCheckbox
                        label="All 24 hours"
                        onChange={() => {
                            handleAll24Hours();
                        }}
                        checked={checkAll24Hours()}
                    />
                </Block>
                <Block>
                    <CustomCheckbox
                        label="Mon - Fri 24 hours"
                        onChange={() => {
                            handleMF24Hours();
                        }}
                        checked={checkMF24Hours()}
                    />
                </Block>
            </Row>
            <TagContainer>
                {DOTW.map((day, index) =>
                    openingHours[day].from === "00:00" &&
                        openingHours[day].to === "23:59" ? (
                        <Tag key={day} name={day} label={DOTWL[index]} onDelete={() => handleDelete(day)} />
                    ) : null
                )}
            </TagContainer>
            <TimepickersContainer>
                {DOTW.map((day, index) =>
                    openingHours[day].from !== "00:00" ||
                        openingHours[day].to !== "23:59" ? (
                        <Timepicker key={day} label={DOTWL[index]} name={`openingHourSetting.${day}`} />
                    ) : null
                )}
            </TimepickersContainer>
        </>
    );
}

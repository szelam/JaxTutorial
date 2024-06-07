import React, { useEffect } from "react";
import { Title } from "../../../../styles";
import { useFormContext } from "react-hook-form";
import CustomCheckbox from "../../../../../../components/CustomCheckbox";
import { Row, Block, TagContainer, TimepickersContainer } from "./styles";
import Tag from "../../../../../../components/Tag";
import Timepicker from "../../../../../../components/Timepicker";
import { DOTW } from './constants';

export default function OpeningHours() {
    const { getValues, watch, setValue } = useFormContext();

    const openingHours = watch("openinghours");

    const handleDelete = (name) => {
        setValue(`openinghours.${name}`, { start: "00:00", end: "00:00" });
        // console.log(getValues("openinghours"));
    };
    const handleAll24Hours = () => {
        const isAll24Hours = checkAll24Hours();
        DOTW.forEach((day) => {
            setValue(`openinghours.${day}`, isAll24Hours ? { start: "00:00", end: "00:00" } : { start: "00:00", end: "23:59" });
        });
    };

    const handleMF24Hours = () => {
        const isMF24Hours = checkMF24Hours();
        DOTW.slice(1, 6).forEach((day) => {
            setValue(`openinghours.${day}`, isMF24Hours ? { start: "00:00", end: "00:00" } : { start: "00:00", end: "23:59" });
        });
    };

    const checkAll24Hours = () => {
        return DOTW.every(
            (day) =>
                openingHours[day].start === "00:00" &&
                openingHours[day].end === "23:59"
        );
    };

    const checkMF24Hours = () => {
        return DOTW.slice(1, 6).every(
            (day) =>
                openingHours[day].start === "00:00" &&
                openingHours[day].end === "23:59"
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
                {DOTW.map((day) =>
                    openingHours[day].start === "00:00" &&
                        openingHours[day].end === "23:59" ? (
                        <Tag key={day} name={day} onDelete={() => handleDelete(day)} />
                    ) : null
                )}
            </TagContainer>
            <TimepickersContainer>
                {DOTW.map((day) =>
                    openingHours[day].start !== "00:00" ||
                        openingHours[day].end !== "23:59" ? (
                        <Timepicker key={day} label={day} name={`openinghours.${day}`} />
                    ) : null
                )}
            </TimepickersContainer>
        </>
    );
}

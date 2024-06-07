import React from "react";
import { LeftPanel } from "../../styles";
import GeneralInfo from "./containers/GeneralInfo";
import OpeningHours from "./containers/OpeningHours";

export default function LeftContainer() {

    return (
        <LeftPanel>
            <GeneralInfo />
            <OpeningHours />
        </LeftPanel>
    );
}

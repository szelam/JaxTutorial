import {
    RowContainer,
    RowLabel,
    RowChildrenContainer,
    TooltipCircle,
} from "../../styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import React, { useState } from "react";
import { styled as MUIStyled } from "@mui/system";

const StyledTooltip = MUIStyled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: "#21BFBC",
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: "#21BFBC",
        fontSize: "11px",
    },
}));

export default function Row({
    title,
    required,
    children,
    spacebetween = false,
    tooltip = undefined,
}) {
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const handleTooltipOpen = () => {
        setTooltipOpen(true);
    };

    const handleTooltipClose = () => {
        setTooltipOpen(false);
    };

    return (
        <RowContainer
            style={{ justifyContent: spacebetween ? "space-between" : "left" }}
        >
            {title && (
                <RowLabel>
                    {title}
                    <span style={{ color: "red" }}>{required ? "*" : ""}</span>
                    {tooltip && (
                        <StyledTooltip
                            open={tooltipOpen}
                            onClose={handleTooltipClose}
                            title={tooltip}
                            arrow
                            placement="top"
                        >
                            <TooltipCircle onClick={handleTooltipOpen}>!</TooltipCircle>
                        </StyledTooltip>
                    )}
                </RowLabel>
            )}
            <RowChildrenContainer
                style={{ width: spacebetween ? "inherit" : "100%" }}
            >
                {children}
            </RowChildrenContainer>
        </RowContainer>
    );
}

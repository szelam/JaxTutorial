import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import {

} from "../../styles";

export default function CustomTimepicker({ name }) {
    const { control } = useFormContext();

    return (
        <>
        </>
        // <Controller
        //     name={name}
        //     control={control}
        //     render={({ field }) => (
        //         <div>
        //             <input
        //                 type="time"
        //                 {...field}
        //             />
        //         </div>
        //     )}
        // />
    );
}
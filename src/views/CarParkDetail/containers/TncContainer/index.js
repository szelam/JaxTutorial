import React, { useState } from "react";
import { Title } from "../../styles";
import Row from "../Row";
import CustomToggle from "../../../../components/CustomToggle";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@szelam95/ck-editor";
import { useFormContext } from "react-hook-form";

export default function TncContainer() {
    const [customize, setCustomize] = useState(false);
    const { watch, setValue } = useFormContext();

    return (
        <>
            <Title>T&C</Title>
            <Row title="Customize Content" wide>
                <CustomToggle
                    name="bookingTac.replaceDefault"
                    label="Customize Content"
                    labels={["Yes", "No"]}
                    onChange={(e) => setCustomize(e)}
                />
            </Row>
            <Row title='Eng' style={{ opacity: customize ? 1 : 0.3 }} wide >
                <CKEditor
                    editor={ClassicEditor}
                    data={watch("bookingTac.content.en")}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setValue("bookingTac.content.en", data);
                    }}
                    disabled={customize ? false : true}
                />
            </Row>
            <Row title='Chi' style={{ opacity: customize ? 1 : 0.3 }} wide>
                <CKEditor
                    editor={ClassicEditor}
                    data={watch("bookingTac.content.zh")}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setValue("bookingTac.content.zh", data);
                    }}
                    disabled={customize ? false : true}
                />
            </Row>
        </>
    );
}
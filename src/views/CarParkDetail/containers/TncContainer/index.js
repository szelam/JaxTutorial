import React, { useEffect, useState } from "react";
import { Title } from "../../styles";
import Row from "../Row";
import CustomToggle from "../../../../components/CustomToggle";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@szelam95/ck-editor";

export default function TncContainer({ control, errors, watch, setValue }) {
    const [customize, setCustomize] = useState(false);

    return (
        <>
            <Title>T&C</Title>
            <Row title="Customize Content" wide>
                <CustomToggle
                    control={control}
                    name="customcontent"
                    label="Customize Content"
                    on_label="Yes"
                    off_label="No"
                    onChange={(e) => setCustomize(e)}
                    error={errors.customcontent}
                />
            </Row>
            <Row title='Eng' style={{ opacity: customize ? 1 : 0.3 }} wide >
                <CKEditor
                    editor={ClassicEditor}
                    data={watch("tnceng")}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setValue("tnceng", data);
                    }}
                    disabled={customize ? false : true}
                />
            </Row>
            <Row title='Chi' style={{ opacity: customize ? 1 : 0.3 }} wide>
                <CKEditor
                    editor={ClassicEditor}
                    data={watch("tncchi")}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setValue("tncchi", data);
                    }}
                    disabled={customize ? false : true}
                />
            </Row>
        </>
    );
}
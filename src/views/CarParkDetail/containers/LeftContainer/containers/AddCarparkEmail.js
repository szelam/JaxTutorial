import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import Row from '../../Row';
import CustomInput from '../../../../../components/CustomInput';
import CustomIconButton from './CustomIconButton';
import { Add, Remove } from '@mui/icons-material';

export default function AddCarparkEmail() {
    const { control, register, getValues } = useFormContext();
    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        control, // control props comes from useForm (optional: if you are using FormContext)
        name: "contact.emails", // unique name for your Field Array
    });

    const handleAdd = () => {
        append("email@domain.com");
    }

    const handleRemove = () => {
        remove(fields.length - 1);
    }

    return (
        <>

            {fields.map((field, index) => (
                <Row key={field.id} title={`Carpark E-mail ${index + 1}`}>
                    <CustomInput
                        name={`contact.emails[${index}]`}
                        label=""
                    />
                    {index === 0 ? (
                        <CustomIconButton onClick={handleAdd}>
                            <Add />
                        </CustomIconButton>
                    ) : (
                        <CustomIconButton onClick={handleRemove}>
                            <Remove />
                        </CustomIconButton>
                    )
                    }
                </Row>
            ))}
        </>
    )
}
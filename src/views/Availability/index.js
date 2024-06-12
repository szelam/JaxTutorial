import React, { useState } from 'react';
import { Container } from './styles';
import { FormProvider, useForm } from 'react-hook-form';
import ActionRow from './containers/ActionRow';
import AvaGeneral from './containers/AvaGeneral';
import AvaDaytime from './containers/AvaDaytime';
import schema from './schema';
import { yupResolver } from '@hookform/resolvers/yup';
import moment from 'moment';

export default function Availability() {
    const [always, setAlways] = useState(false);
    // const { token } = useAuth();
    const methods = useForm({
        resolver: yupResolver(schema),
        defaultValues: schema.cast({
            availablePeriod: {
                from: moment(),
                to: moment().add(1, 'day'),
            },
            blockedPeriods: [{
                from: moment(),
                to: moment().add(1, 'day'),
            }],
            HourlyPolicies: [{
                from: moment(),
                to: moment().add(1, 'hour'),
                min: 1,
                max: 1,
                weekday: 1,
            }]
        }),
    });

    const handleAlways = (e) => {
        setAlways(e);
    };

    return (
        <Container>
            <FormProvider {...methods}>
                <ActionRow />
                <AvaGeneral setAlways={handleAlways} />
                {always ? <img src="/img/cal.jpg" style={{ width: "100%" }} /> : <AvaDaytime />}
            </FormProvider>
        </Container>
    );
}
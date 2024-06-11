import * as Yup from 'yup';

const schema = Yup.object().shape({
    status: Yup.string().default("active"),
    name: Yup.object().shape({
        en: Yup.string().required('required').default(''),
        zh: Yup.string().required('required').default(''),
    }),
    code: Yup.string().required('required').default(''),
    management: Yup.string().default('1'),
    contact: Yup.object().shape({
        phone: Yup.object().shape({
            code: Yup.string().required('required').default('1'),
            number: Yup.string().required('required').default('').matches(/^[456789][0-9]{7}$/, 'invalid phone number'),
        }),
        emails: Yup.array().of(Yup.string().email('invalid email format')).default([' ']),
    }),
    noticeHotline: Yup.string().default('').matches(/^(?:[456789][0-9]{7})?$/, 'invalid phone number'),
    noticeEmail: Yup.string().email('invalid email format').default(''),
    VehicleTypes: Yup.array()
        .of(Yup.string())
        .min(1, 'required')
        .required('required')
        .default([]),
    PaymentMethods: Yup.array()
        .of(Yup.string()),
    restrictions: Yup.array()
        .of(Yup.string())
        .min(1, 'required')
        .required('required')
        .default([]),
    accessType: Yup.string(),
    servicetag: Yup.string().required('required').default('1'), //
    buildtageng: Yup.string().default('1'), //
    buildtagchi: Yup.string().default('1'), //
    serviceTypeTitle: Yup.object().shape({
        en: Yup.string().required('required').default(''),
        zh: Yup.string().required('required').default(''),
    }),
    remarks: Yup.object().shape({
        en: Yup.string().default(''),
        zh: Yup.string().default(''),
    }),
    priority: Yup.number(),
    syncMonthlyOccupancyStatusToSHKP: Yup.boolean().default(false),
    contractor: Yup.string().nullable(true),
    evcontractor: Yup.string().nullable(true),

    address: Yup.object().shape({
        line: Yup.object().shape({
            en: Yup.string(),
            zh: Yup.string(),
        }),
        District: Yup.string().required('required').default('1'),
        location: Yup.object().shape({
            type: Yup.string().required('required').default('Point'),
            coordinates: Yup.array().of(Yup.number()).required('required').default([114.216955, 22.313578]),
        }),
        details: Yup.string().required('required').default(''),
        type: Yup.string().required('required').default('commercial'),
    }),

    features: Yup.object().shape({
        cover: Yup.object().shape({
            value: Yup.string(),
            priority: Yup.number(),
        }),
        evCharge: Yup.object().shape({
            value: Yup.string(),
            priority: Yup.number(),
        }),
        instantBooking: Yup.object().shape({
            value: Yup.string(),
            priority: Yup.number(),
        }),
        headRoom: Yup.object().shape({
            value: Yup.string().required('required').default('1'),
            priority: Yup.number(),
        }),
    }),

    bookingTac: Yup.object().shape({
        content: Yup.object().shape({
            en: Yup.string(),
            zh: Yup.string(),
        }),
        replaceDefault: Yup.boolean().default(false),
    }),

    openingHourSetting: Yup.object().shape({
        mon: Yup.object().shape({
            from: Yup.string().required('required').default('00:00'),
            to: Yup.string().required('required').default('23:59'),
        }),
        tue: Yup.object().shape({
            from: Yup.string().required('required').default('00:00'),
            to: Yup.string().required('required').default('23:59'),
        }),
        wed: Yup.object().shape({
            from: Yup.string().required('required').default('00:00'),
            to: Yup.string().required('required').default('23:59'),
        }),
        thu: Yup.object().shape({
            from: Yup.string().required('required').default('00:00'),
            to: Yup.string().required('required').default('23:59'),
        }),
        fri: Yup.object().shape({
            from: Yup.string().required('required').default('00:00'),
            to: Yup.string().required('required').default('23:59'),
        }),
        sat: Yup.object().shape({
            from: Yup.string().required('required').default('00:00'),
            to: Yup.string().required('required').default('23:59'),
        }),
        sun: Yup.object().shape({
            from: Yup.string().required('required').default('00:00'),
            to: Yup.string().required('required').default('23:59'),
        }),
    }),
});


export default schema;
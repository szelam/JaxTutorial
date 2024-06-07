import * as Yup from 'yup';

const schema = Yup.object().shape({
    status: Yup.boolean().default(false),
    nameeng: Yup.string().required('required').default(''),
    namechi: Yup.string().required('required').default(''),
    code: Yup.string().required('required').default(''),
    type: Yup.string().required('required').default('1'),
    management: Yup.string().default('1'),
    telephonesuffix: Yup.string().required('required').default('1'),
    telephone: Yup.string().required('required').default('').matches(/^[456789][0-9]{7}$/, 'invalid phone number'),
    emails: Yup.array().of(Yup.string().email('invalid email format')).default(['Super']),
    hotline: Yup.string().required('required').default('').matches(/^[456789][0-9]{7}$/, 'invalid phone number'),
    noticeemail: Yup.string().email('invalid email format').required('required').default(''),
    suitablefor: Yup.array()
        .of(Yup.string())
        .min(1, 'required')
        .required('required')
        .default([]),
    paymentmethods: Yup.array()
        .of(Yup.string()),
    restrictions: Yup.array()
        .of(Yup.string())
        .min(1, 'required')
        .required('required')
        .default([]),
    accesstype: Yup.string(),
    headroom: Yup.string().required('required').default('1'),
    servicetag: Yup.string().required('required').default('1'),
    buildtageng: Yup.string().default('1'),
    buildtagchi: Yup.string().default('1'),
    servicetypeeng: Yup.string().required('required').default(''),
    servicetypechi: Yup.string().required('required').default(''),
    remarkeng: Yup.string(),
    remarkchi: Yup.string(),
    priority: Yup.number(),
    sync: Yup.boolean().default(false),
    contractor: Yup.string(),
    evcontractor: Yup.string(),
    region: Yup.string().required('required').default('1'),
    addresseng: Yup.string(),
    addresschi: Yup.string(),
    addresspos: Yup.object().shape({
        lat: Yup.number().required('required').default(22.313578),
        lng: Yup.number().required('required').default(114.216955),
    }),
    addressdetails: Yup.string().required('required').default(''),
    cover: Yup.string(),
    coverpriority: Yup.number(),
    evcharge: Yup.boolean().default(false),
    evchargepriority: Yup.number(),
    booking: Yup.boolean().default(false),
    bookingpriority: Yup.number(),
    tnc: Yup.boolean().default(false),
    tnceng: Yup.string(),
    tncchi: Yup.string(),
    openinghours: Yup.object().shape({
        mon: Yup.object().shape({ start: Yup.string().required('required').default('00:00'), end: Yup.string().required('required').default('23:59') }),
        tue: Yup.object().shape({ start: Yup.string().required('required').default('00:00'), end: Yup.string().required('required').default('23:59') }),
        wed: Yup.object().shape({ start: Yup.string().required('required').default('00:00'), end: Yup.string().required('required').default('23:59') }),
        thu: Yup.object().shape({ start: Yup.string().required('required').default('00:00'), end: Yup.string().required('required').default('23:59') }),
        fri: Yup.object().shape({ start: Yup.string().required('required').default('00:00'), end: Yup.string().required('required').default('23:59') }),
        sat: Yup.object().shape({ start: Yup.string().required('required').default('00:00'), end: Yup.string().required('required').default('23:59') }),
        sun: Yup.object().shape({ start: Yup.string().required('required').default('00:00'), end: Yup.string().required('required').default('23:59') }),
    }),
});


export default schema;
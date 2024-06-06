import * as Yup from 'yup';

const schema = Yup.object().shape({
    status: Yup.boolean().default(false),
    nameeng: Yup.string().required('required'),
    namechi: Yup.string().required('required'),
    code: Yup.string().required('required'),
    type: Yup.string().required('required'),
    management: Yup.string().default('none'),
    telephonesuffix: Yup.string().required('required'),
    telephone: Yup.string().required('required').matches(/^[456789][0-9]{7}$/, 'invalid phone number'),
    email: Yup.string().email('invalid email format').required('required'),
    hotline: Yup.string().required('required').matches(/^[456789][0-9]{7}$/, 'invalid phone number'),
    noticeemail: Yup.string().email('invalid email format').required('required'),
    suitablefor: Yup.array()
        .of(Yup.string())
        .min(1, 'required')
        .required('required'),
    paymentmethods: Yup.array()
        .of(Yup.string()),
    restrictions: Yup.array()
        .of(Yup.string())
        .min(1, 'required')
        .required('required'),
    accesstype: Yup.string(),
    headroom: Yup.string().required('required'),
    servicetag: Yup.string().required('required'),
    buildtageng: Yup.string(),
    buildtagchi: Yup.string(),
    servicetypeeng: Yup.string().required('required'),
    servicetypechi: Yup.string().required('required'),
    remarkeng: Yup.string(),
    remarkchi: Yup.string(),
    priority: Yup.number().required('required'),
    sync: Yup.boolean().default(false),
    contractor: Yup.string(),
    evcontractor: Yup.string(),
    region: Yup.string().required('required'),
    addresseng: Yup.string(),
    addresschi: Yup.string(),
    addressdetails: Yup.string().required('required'),
    cover: Yup.string(),
    coverpriority: Yup.number().required('required'),
    evcharge: Yup.boolean().default(false),
    evchargepriority: Yup.number().required('required'),
    booking: Yup.boolean().default(false),
    bookingpriority: Yup.number().required('required'),
    tnc: Yup.boolean().default(false),
    tnceng: Yup.string(),
    tncchi: Yup.string(),
});


export default schema;
import * as yup from 'yup';
import moment from 'moment';

const schema = yup.object().shape({
    alwaysAvailable: yup.boolean().default(false),
    availablePeriod: yup.object().shape({
        from: yup
            .string()
            .required("required")
            .test("InValid Date", "InValid Date", (date, schema) => {
                const { parent, createError, path } = schema;
                const { to } = parent;

                const momentDate = moment(date);

                if (!date) {
                    return createError({
                        path,
                        message: "required",
                    });
                }

                if (!momentDate.isValid()) {
                    return false;
                }

                if (momentDate.isAfter(moment(to), "minutes")) {
                    return createError({
                        path,
                        message: "From should before To",
                    });
                }

                return true;
            })
            .typeError("required"),
        // .default(() => moment().add(1, 'hour').format("YYYY-MM-DD HH:mm")),
        to: yup
            .string()
            .required("required")
            .typeError("required")
            .test("InValid Date", "InValid Date", (date, schema) => {
                const { parent, createError, path } = schema;
                const { from } = parent;

                const momentDate = moment(date);

                if (!date) {
                    return createError({
                        path,
                        message: "required",
                    });
                }

                if (!momentDate.isValid()) {
                    return false;
                }

                if (moment(date).isBefore(moment(from), "minutes")) {
                    return createError({
                        path,
                        message: "To should after from",
                    });
                }

                return moment(date).isValid();
            }),
    }),
    blockedPeriods: yup.array().of(
        yup.object().shape({
            from: yup
                .string()
                .test("InValid Date", "InValid Date", (date, schema) => {
                    const { parent, from: schemaFrom, createError, path } = schema;
                    const { to } = parent;
                    const { value = {} } = schemaFrom[schemaFrom.length - 1];
                    const { PolicyPlan: { availablePeriod: { from } = {} } = {} } =
                        value || {};

                    if (to && !date) {
                        return false;
                    }
                    if (!date) {
                        return true;
                    }

                    if (!from) {
                        return moment(date).isValid();
                    }

                    if (moment(date).isBefore(moment(from))) {
                        return createError({
                            path,
                            message: "Date is before availablePeriod from",
                        });
                    }

                    return moment(date).isValid();
                })
                .nullable()
                .typeError("InValid Date"),
            to: yup
                .string()
                .test("InValid Date", "InValid Date", (date, schema) => {
                    const { parent, from: schemaFrom, createError, path } = schema;
                    const { from } = parent;
                    const { value = {} } = schemaFrom[schemaFrom.length - 1];
                    const { PolicyPlan: { availablePeriod: { to } = {} } = {} } =
                        value || {};

                    if (from && !date) {
                        return false;
                    }
                    if (!date) {
                        return true;
                    }

                    if (!to) {
                        return moment(date).isValid();
                    }

                    if (moment(date).isAfter(moment(to))) {
                        return createError({
                            path,
                            message: "Date is after availablePeriod to",
                        });
                    }

                    if (moment(date).isBefore(moment(from), "date")) {
                        return createError({
                            path,
                            message: "InValid Date (is before start date)",
                        });
                    }

                    return moment(date).isValid();
                })
                .nullable()
                .typeError("InValid Date"),
        })
    ),
    HourlyPolicies: yup.array().of(
        yup
            .object()
            .shape({
                from: yup
                    .string()
                    .required("required")
                    .test(
                        "HourlyPolicies",
                        "From should before To",
                        (date, { createError, path, parent }) => {
                            const { to, deleted } = parent;

                            if (deleted) {
                                return true;
                            }

                            if (!date) {
                                return createError({
                                    path,
                                    message: "required",
                                });
                            }
                            const time = moment(date, "HH:mm");

                            if (!time.isValid()) {
                                return createError({
                                    path,
                                    message: "InValid Date",
                                });
                            }

                            if (time.isValid() && time.minutes() % 15 !== 0) {
                                return createError({
                                    path,
                                    message: "only allow 15 30 45 60 minutes",
                                });
                            }

                            return time.isBefore(moment(to, "HH:mm"), "minute");
                        }
                    )
                    .typeError("required"),
                to: yup
                    .string()
                    .required("required")
                    .test(
                        "HourlyPolicies",
                        "To should be after From",
                        (date, { createError, path, parent }) => {
                            const { from, deleted } = parent;
                            if (!date) {
                                return createError({
                                    path,
                                    message: "required",
                                });
                            }

                            if (deleted) {
                                return true;
                            }

                            const time = moment(date, "HH:mm");

                            if (time.isValid() && time.format("HH:mm") === "23:59") {
                                return true;
                            }

                            if (time.isValid() && time.minutes() % 15 !== 0) {
                                return createError({
                                    path,
                                    message: "only allow 15 30 45 60 minutes",
                                });
                            }

                            return time.isAfter(moment(from, "HH:mm"), "minutes");
                        }
                    )
                    .typeError("required"),
                max: yup
                    .string()
                    .nullable(true)
                    .test("Invalid hour", "Invalid hour", (max, schema) => {
                        const { parent = {}, path, createError } = schema;
                        const { min } = parent || {};
                        if (max === "NaN" || !max) {
                            return true;
                        }

                        if (max < min) {
                            return createError({
                                path,
                                message: "max hour should be larger than min hour",
                            });
                        }

                        return Number.isInteger(max / 0.25) && max > 0;
                    }),
                min: yup
                    .number()
                    .required("required")
                    .moreThan(0, "must be a positive number")
                    .test("Invalid hour", "Invalid hour", (hour) =>
                        Number.isInteger(hour / 0.25)
                    ),
                weekday: yup.number().required("required"),
            })
            .required("required"),
    ),
});

export default schema;
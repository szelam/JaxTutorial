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
        yup.object().shape({
            from: yup
                .string()
                .required("required")
                .test(
                    "from-before-to",
                    "From should be before To",
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
                                message: "Invalid Date",
                            });
                        }

                        if (time.isValid() && time.minutes() % 15 !== 0) {
                            return createError({
                                path,
                                message: "only allow 15, 30, 45, 60 minutes",
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
                    "to-after-from",
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
                                message: "only allow 15, 30, 45, 60 minutes",
                            });
                        }

                        return time.isAfter(moment(from, "HH:mm"), "minutes");
                    }
                )
                .typeError("required"),
            max: yup
                .number()
                .nullable(true)
                .test("non-zero-max", "Max cannot be 0", (max) => max !== 0)
                .test("max-greater-than-min", "Max must be greater than Min", function (max) {
                    const { min } = this.parent;
                    return max === null || max > min;
                })
                .test("max-within-range", "Max must be within the range between From and To", function (max) {
                    const { from, to } = this.parent;
                    if (max === null) return true;

                    const fromTime = moment(from, "HH:mm");
                    const toTime = moment(to, "HH:mm");
                    const maxDuration = toTime.diff(fromTime, "hours", true);

                    return max <= maxDuration;
                }),
            min: yup
                .number()
                .required("required")
                .moreThan(0, "must be a positive number")
                .test("valid-min", "Min must be within the range between From and To", function (min) {
                    const { from, to } = this.parent;

                    const fromTime = moment(from, "HH:mm");
                    const toTime = moment(to, "HH:mm");
                    const minDuration = toTime.diff(fromTime, "hours", true);

                    return min < minDuration;
                })
                .test("valid-increment", "Invalid hour", (hour) => Number.isInteger(hour / 0.25)),
            weekday: yup
                .number()
                .required("required")
                .test("no-overlap", "Time slots must not overlap", function (value) {
                    const { from, to } = this.parent;
                    const others = this.options.context.HourlyPolicies || [];
                    const fromTime = moment(from, "HH:mm");
                    const toTime = moment(to, "HH:mm");

                    return !others.some((policy) => {
                        if (policy.weekday !== value || policy === this.parent) return false;

                        const otherFromTime = moment(policy.from, "HH:mm");
                        const otherToTime = moment(policy.to, "HH:mm");

                        return (fromTime.isBefore(otherToTime) && toTime.isAfter(otherFromTime));
                    });
                }),
        })
            .required("required")
    ),
});

export default schema;
export function processData(
  holiday,
  populatedPolicyPlans,
  quota,
  availability,
  bookedPeriods
) {
  //   console.log(
  //     holiday,
  //     populatedPolicyPlans,
  //     quota,
  //     availability,
  //     bookedPeriods
  //   );

  const today = new Date();

  const activePolicyPlan = populatedPolicyPlans.find((plan) => {
    const fromDate = new Date(plan[0].availablePeriod.from);
    const toDate = new Date(plan[0].availablePeriod.to);
    return today >= fromDate && today <= toDate;
  });

  activePolicyPlan
    ? console.log("Relevant policy plan:", activePolicyPlan)
    : console.log("No relevant policy plan found");

  const { HourlyPolicies: hourlyPolicies } = activePolicyPlan[0];

  let byDay = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
  };

  hourlyPolicies.forEach((hPolicy) => {
    byDay[parseInt(hPolicy.weekday)].push({
      from: hPolicy.from,
      to: hPolicy.to,
      bookTimeUnit: hPolicy.min,
      bookMaxUnit: hPolicy.max,
    });
  });

  return {
    publicHolidays: holiday.map((h) => new Date(h.date)),
    openingDays:
      activePolicyPlan?.[0]?.openingDays.map((day) => parseInt(day)) || [],
    byDay,
  };
}

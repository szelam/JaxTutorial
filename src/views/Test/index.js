import { Box, Container, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import moment from "moment";
import React, { useEffect, useState } from "react";
import MaterialInput from "../../components/MaterialInput";

const DateRangeDisplay = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(2),
}));

const RangeItem = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  padding: theme.spacing(1),
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.shape.borderRadius,
}));

export default function Test() {
  const [selectedDate, setSelectedDate] = useState(moment());
  const [dateRange, setDateRange] = useState();

  function getDayRange(moment, halfDay, renewDay) {
    const day = moment.date();
    const month = moment.month();
    const year = moment.year();
    if (isNaN(day)) return NaN;

    const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
    const lastDayOfNextMonth = new Date(year, month + 2, 0).getDate();

    if (day > lastDayOfMonth || day === 0) return false;

    if (day <= halfDay) {
      return [
        {
          start: new Date(year, month, 1),
          end: new Date(year, month, lastDayOfMonth),
        },
      ];
    } else if (day > halfDay && day <= renewDay) {
      return [
        {
          start: new Date(year, month, halfDay + 1),
          end: new Date(year, month, lastDayOfMonth),
        },
      ];
    } else {
      return [
        {
          start: new Date(year, month, halfDay + 1),
          end: new Date(year, month, lastDayOfMonth),
        },
        {
          start: new Date(year, month + 1, 1),
          end: new Date(year, month + 1, lastDayOfNextMonth),
        },
      ];
    }
  }

  useEffect(() => {
    setDateRange(getDayRange(selectedDate, 15, 22));
  }, [selectedDate]);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Date Range Calculator
      </Typography>

      <Box mb={2}>
        <DatePicker
          label="Select a day"
          value={selectedDate}
          onChange={(newValue) => {
            console.log(newValue);
            setSelectedDate(newValue);
          }}
        />
      </Box>

      <DateRangeDisplay elevation={3}>
        <Typography variant="h6" gutterBottom>
          Date Range:
        </Typography>
        {dateRange
          ? dateRange.map((range, index) => (
              <RangeItem key={index}>
                <Typography>Start: {range.start.toDateString()}</Typography>
                <Typography>End: {range.end.toDateString()}</Typography>
              </RangeItem>
            ))
          : "Invalid day"}
      </DateRangeDisplay>

      <Box mt={2} width={300} mx="auto">
        <MaterialInput label="Username" placeholder="Enter your username" />
        <MaterialInput label="Danger!!" placeholder="Wow" danger />
      </Box>
    </Container>
  );
}

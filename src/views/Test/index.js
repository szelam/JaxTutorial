import { Box, Container, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import moment from "moment";
import React, { useEffect, useState } from "react";
import MaterialInput from "../../components/MaterialInput";
import { getDayRange } from "../../utils/getDayRange";

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

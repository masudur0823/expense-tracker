import React from "react";
import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Title from "../../components/Title";

function AddExpense() {
  const [expenseDate, setExpenseDate] = React.useState(null);
  const [reason, setReason] = React.useState("");
  const [expenseAmount, setExpenseAmount] = React.useState("");
  const handleSubmit = () => {
    console.log({ reason, expenseAmount, expenseDate });
  };
  return (
    <>
      <Title text="Add Expense" />
      <Stack
        direction={{ md: "row", sm: "column" }}
        spacing={2}
        alignItems="center"
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Expense Date"
            sx={{ width: "100%" }}
            value={expenseDate}
            onChange={(newValue) => setExpenseDate(newValue)}
          />
        </LocalizationProvider>
        <TextField
          label="Cause"
          fullWidth
          type="text"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
        <TextField
          label="Amount"
          fullWidth
          type="number"
          onWheel={(e) => e.target.blur()}
          value={expenseAmount}
          onChange={(e) => setExpenseAmount(e.target.value)}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Add
        </Button>
      </Stack>
    </>
  );
}

export default AddExpense;

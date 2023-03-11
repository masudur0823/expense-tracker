import React from "react";
import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Title from "../../components/Title";

function AddIncome() {
  const [salaryDate, setSalaryDate] = React.useState(null);
  const [source, setSource] = React.useState("Office");
  const [incomeAmount, setIncomeAmount] = React.useState("");

  const handleSubmit = () => {
    console.log({ source, incomeAmount, salaryDate });
  };
  return (
    <>
      <Title text="Income" />
      <Stack
        direction={{ md: "row", sm: "column" }}
        spacing={2}
        alignItems="center"
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Salary Date"
            sx={{ width: "100%" }}
            value={salaryDate}
            onChange={(newValue) => setSalaryDate(newValue)}
          />
        </LocalizationProvider>
        <TextField
          label="Source"
          fullWidth
          type="text"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />
        <TextField
          label="Amount"
          fullWidth
          type="number"
          onWheel={(e) => e.target.blur()}
          value={incomeAmount}
          onChange={(e) => setIncomeAmount(e.target.value)}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Add
        </Button>
      </Stack>
    </>
  )
}

export default AddIncome
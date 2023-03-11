import { Box, Container, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import DataTableTitle from "../../components/DataTableTitle";
import Table from "../../components/Table/Table";
import AddExpense from "./AddExpense";

const jsonData = [
  {
    expenseDate: "12/01/2023",
    reason: "ggg",
    expenseAmount: 100,
  },
  {
    expenseDate: "12/01/2023",
    reason: "aaa",
    expenseAmount: 300,
  },
  {
    expenseDate: "12/01/2023",
    reason: "aaa",
    expenseAmount: 200,
  },
];

function ViewExpense() {
  const [totalExpense, setTotalExpense] = useState();
  useEffect(() => {
    const result = jsonData
      .map((info) => info.expenseAmount)
      .reduce((prev, next) => prev + next);
    setTotalExpense(result);
  }, []);

  const COLUMNS = React.useMemo(
    () => [
      {
        Header: "Expense Date",
        accessor: "expenseDate",
      },
      {
        Header: "Reason",
        accessor: "reason",
      },
      {
        Header: "Expense Amount",
        accessor: "expenseAmount",
      },
    ],
    []
  );
  return (
    <Container>
      <AddExpense />
      <DataTableTitle text="Expense Data Table" />
      <Stack direction={'row'} justifyContent={'center'} mt={3}>
        <Box>
          <h3>Total Expense:{totalExpense}</h3>
          <Table data={jsonData} columns={COLUMNS} />
        </Box>
      </Stack>
    </Container>
  );
}

export default ViewExpense;

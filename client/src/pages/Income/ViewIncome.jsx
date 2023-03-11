import { Box, Chip, Container, Divider, Stack } from "@mui/material";
import React from "react";
import DataTableTitle from "../../components/DataTableTitle";
import Table from "../../components/Table/Table";
import Title from "../../components/Title";
import AddIncome from "./AddIncome";

const jsonData = [
  {
    salaryDate: "12/01/2023",
    source: "office",
    amount: 20000,
  },
  {
    salaryDate: "12/01/2023",
    source: "office",
    amount: 20000,
  },
];

function ViewIncome() {
  const COLUMNS = React.useMemo(
    () => [
      {
        Header: "Salary Date",
        accessor: "salaryDate",
      },
      {
        Header: "Source",
        accessor: "source",
      },
      {
        Header: "Amount",
        accessor: "amount",
      },
    ],
    []
  );
  return (
    <Container>
      <AddIncome />
      <DataTableTitle text="Income Data Table" />
      <Stack direction={"row"} justifyContent={"center"}>
        <Box>
          <Table data={jsonData} columns={COLUMNS} />
        </Box>
      </Stack>
    </Container>
  );
}

export default ViewIncome;

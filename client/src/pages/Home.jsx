import {
  Box,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Appbar from "../components/Appbar";

function Home() {
  return (
    <>
      <Appbar />
      <Typography bgcolor={"primary"} variant="h4" textAlign={"center"}>
        Home expense
      </Typography>
      <Stack direction={'row'} justifyContent={'center'}>
        <Box width={"400px"}>
          <h1>Income: {'25000'}</h1>
          <h1>Expense: {'10000'}</h1>
        </Box>
      </Stack>
    </>
  );
}

export default Home;

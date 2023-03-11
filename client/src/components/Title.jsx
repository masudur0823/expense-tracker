import { Typography } from "@mui/material";
import React from "react";

function Title({text}) {
  return (
    <Typography
      variant="h5"
      bgcolor={"primary.main"}
      color="white"
      px={3}
      py={1}
      borderRadius={2}
      mb={4}
    >
      {text}
    </Typography>
  );
}

export default Title;

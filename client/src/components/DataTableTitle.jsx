import { Box, Chip, Divider } from "@mui/material";
import React from "react";

function DataTableTitle({text}) {
  return (
    <Box my={4}>
      <Divider>
        <Chip label={text} />
      </Divider>
    </Box>
  );
}

export default DataTableTitle;

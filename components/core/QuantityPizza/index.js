import { Button, Box, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

export function QuantityPizza({ quantity }) {
  return (
    <Box>
      <Button variant="outline">{quantity > 1 ? "-" : "🗑"}</Button>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={quantity}
      />
      <Button variant="outline">+</Button>
    </Box>
  );
}

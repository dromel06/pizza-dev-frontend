import { Grid, Paper, Typography, Stack, Container } from "@mui/material";
import { useEffect, useState } from "react";

export default function ItemCart({ item: { name, quantity, amount } }) {
  return (
    <Grid sx={{ display: "flex", direction: "row" }}>
      <Grid item xs={6}>
        <Typography>{name}</Typography>
      </Grid>
      <Grid item xs={3}>
        {quantity}
      </Grid>
      <Grid item xs={3}>
        {amount}
      </Grid>
    </Grid>
  );
}

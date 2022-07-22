import * as React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import ClearIcon from "@mui/icons-material/Clear";

import { Paper, Typography } from "@mui/material";

import { Link, Grid, Container, Stack } from "@mui/material";

export function IngredientsList({ ingredients }) {
  return (
    <Container
      sx={{
        mt: 1,
        mb: 1,
      }}
    >
      {ingredients.map((ingredient) => {
        return (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "2px solid #000",
            }}
            key={ingredient.id}
          >
            <Typography> {ingredient.name} </Typography>
            <ClearIcon color="error" />
          </Box>
        );
      })}
    </Container>
  );
}

import * as React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import ClearIcon from "@mui/icons-material/Clear";

import {
  Button,
  Paper,
  Typography,
  IconButton,
  Container,
  Stack,
} from "@mui/material";

export function IngredientsList({ ingredients, onClickDelete }) {
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
              alignItems: "center",
              borderBottom: "2px solid #000",
            }}
            key={ingredient.i_id}
          >
            <Typography> {ingredient.name} </Typography>
            <Button
              onClick={() => {
                onClickDelete(ingredient.name);
              }}
            >
              <ClearIcon color="error" />
            </Button>
          </Box>
        );
      })}
    </Container>
  );
}

import React, { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import { DragCard } from "../DragCard";
import { Box } from "@mui/system";
import { Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import { IngredientsList } from "../IngredientsList";
import { PreviewPizza } from "../PreviewPizza";
import PizzaFondoImage from "../../../public/assets/pizzaFondo.png";

export function DropZone({ ingredients, isIngredients = false }) {
  const [pizza, setPizza] = useState([]);
  const [{ isOver }, dropRef] = useDrop({
    accept: "ingredient",
    drop: (item) =>
      setPizza((pizza) => (!pizza.includes(item) ? [...pizza, item] : pizza)),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  useEffect(() => {}, [pizza]);

  return (
    <Grid container gap="2rem">
      <Grid item xs={12} md={3}>
        <Paper
          className="ingredients"
          sx={{
            backgroundColor: "#FFD866",
            width: "100%",
          }}
          justify="center"
        >
          <Grid container>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box sx={{ borderBottom: "3px solid #000", width: "90%" }}>
                <Typography align="center">
                  {isIngredients ? "Ingredientes" : "Salsas"}
                </Typography>
              </Box>
            </Grid>
            {ingredients?.map((ingredient) => (
              <Grid item xs={4} md={6} mt={2} key={ingredient.name}>
                <DragCard
                  draggable
                  id={ingredient.id}
                  name={ingredient.name}
                  image={ingredient.image}
                />
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} md={5}>
        <Box ref={dropRef}>
          Hola
          <PreviewPizza pizza={pizza} />
          {isOver && <div>Drop Here!</div>}
        </Box>
      </Grid>
      <Grid item xs={12} md={3}>
        <Paper
          className="ingredients"
          sx={{
            backgroundColor: "#FFD866",
            width: "100%",
          }}
          justify="center"
        >
          <Grid container>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box sx={{ borderBottom: "3px solid #000", width: "90%" }}>
                <Typography align="center">Lista de Ingredientes</Typography>
              </Box>
            </Grid>
            <IngredientsList ingredients={pizza} />
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

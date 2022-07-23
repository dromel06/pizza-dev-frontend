import React, { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import { DragCard } from "../DragCard";
import { Box } from "@mui/system";
import { Button, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import { IngredientsList } from "../IngredientsList";
import { PreviewPizza } from "../PreviewPizza";
import PizzaFondoImage from "../../../public/assets/pizzaFondo.png";

export function DropZone({ ingredients, onClickSave }) {
  const [pizza, setPizza] = useState([]);
  const [listPizza, setListPizza] = useState([]);
  const [{ isOver }, dropRef] = useDrop({
    accept: "ingredient",
    drop: (item) =>
      setPizza((pizza) => (!pizza.includes(item) ? [...pizza, item] : pizza)),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const inIngredientsList = (ingredient) => {
    let response = pizza.filter((p) => p.i_id === ingredient.i_id);
    return response;
  };

  useEffect(() => {
    console.log(pizza);

    setListPizza([
      {
        id: 0,
        name: "tabla",
        img: "https://res.cloudinary.com/xabi-api-cloud/image/upload/v1658099909/el3e5eyri52l9zooyena.png",
      },
      pizza
        ? {
            id: 1,
            name: "tabla",
            img: "https://res.cloudinary.com/xabi-api-cloud/image/upload/v1658099909/el3e5eyri52l9zooyena.png",
          }
        : {
            id: 2,
            name: "pizza Masa",
            img: PizzaFondoImage.src,
          },
      ...pizza,
    ]);
  }, [pizza]);

  const onClickDelete = (e) => {
    console.log(e);
    const pizzaIndex = pizza.findIndex((i) => i.name === e);
    const newPizza = [...pizza];
    newPizza.splice(pizzaIndex, 1);
    setPizza(newPizza);
  };

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
                <Typography align="center">Ingredientes</Typography>
              </Box>
            </Grid>
            {ingredients.map((ingredient) => (
              <Grid item xs={4} md={6} mt={2} key={ingredient.id}>
                {pizza.filter((i) => ingredient.i_id != i.i_id) ? (
                  <DragCard
                    id={ingredient.i_id}
                    name={ingredient.name}
                    image={ingredient.img}
                    i_id={ingredient.i_id}
                  />
                ) : (
                  <DragCard
                    draggable
                    id={ingredient.i_id}
                    name={ingredient.name}
                    image={ingredient.img}
                    i_id={ingredient.i_id}
                  />
                )}
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} md={5}>
        <Box ref={dropRef}>
          <PreviewPizza pizzaIngredients={listPizza} />
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
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <IngredientsList
                ingredients={pizza}
                onClickDelete={onClickDelete}
              />
            </Grid>
            <Grid
              item
              xs={12}
              mt={3}
              mb={3}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              {pizza.length > 1 && (
                <Button variant="contained" onClick={() => onClickSave(pizza)}>
                  Salvar
                </Button>
              )}
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
